import { MatTable, MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MenuComponent } from '../../component/menu/menu.component';
import { ButtonComponent } from '../../component/button/button.component';

import { Component, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';
import { UsersService } from '../../srvices/users.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../../interfaces/user';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalViewUserComponent } from './modal-view-user/modal-view-user.component';
import { MatDialog } from '@angular/material/dialog';
import { ModalFormUserComponent } from './modal-form-user/modal-form-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  standalone: true,
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss'],
  imports: [
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatInputModule,
    RouterModule,
    ComponentsModule,
    MatDialogModule,
    MatPaginator,
    FormsModule
  ],
})

export class CrudComponent {

  displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'role',
    'benefits',
    'action'

]
dataSource: any;

listusers: User[] = [];

@ViewChild(MatPaginator) paginator!:MatPaginator;
@ViewChild(MatSort) sort!: MatSort;


constructor(private usersService: UsersService,
  public dialog: MatDialog,
) {
  this.dataSource = new MatTableDataSource<any>(this.listusers);
}


  ngOnInit(){
    this.getListUsers();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getListUsers(){
    this.usersService.getAllUsers().subscribe({
      next: (response: any) => {

        console.log('Lista usuários firebase', response)
        this.listusers=response;

        this.dataSource = new MatTableDataSource<any>(this.listusers)
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;


      },
      error: (err) => {
        console.error(err);
      }
    });
  }
 
    applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
    }
  }

  // logicas do modal

  openModalViewUser(user: User){
    this.dialog.open(ModalViewUserComponent, {
      width: '700px',
      height: '330px',
      data: user
    })
  }
  openModalAddUser(){
    this.dialog.open(ModalFormUserComponent, { 
      width: '700px',
      height: '400px'
    }).afterClosed().subscribe(() => this.getListUsers() );
  }

}
