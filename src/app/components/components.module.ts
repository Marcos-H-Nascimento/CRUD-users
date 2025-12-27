import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../component/menu/menu.component';
import { ButtonComponent } from '../component/button/button.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    MenuComponent,
    ButtonComponent],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule,
    MatDialogModule
  ],

  exports: [
    MenuComponent,
    ButtonComponent
  ]
})
export class ComponentsModule { }
