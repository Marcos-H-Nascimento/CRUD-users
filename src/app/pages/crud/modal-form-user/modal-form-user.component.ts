import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Validators } from '@angular/forms';
import { UsersService } from '../../../srvices/users.service';
import { User } from '../../../interfaces/user';


@Component({
  selector: 'app-modal-form-user',
  templateUrl: './modal-form-user.component.html',
  styleUrl: './modal-form-user.component.scss'
})
export class ModalFormUserComponent {
  
  planosSaude = [
    {
      id: 1,
      descricao: 'Plano 300 Enfermaria'
    },
    {
      id: 2,
      descricao: 'Plano 400 Enfermaria'
    },
    {
      id: 3,
  descricao: 'Plano 500 Plus'
    }
  ]

  planosOdonto = [
    {
      id: 1,
      descricao: 'Plano Basic'
    },
    {
      id: 2,
      descricao: 'Plano Medium'
    },
    {
      id: 3,
      descricao: 'Plano Plus'
    }
  ]
  
  formUser!: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ModalFormUserComponent>,
    private userService:UsersService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}
 
  ngOnInit(){
    this.buildForm();
  }

  // salvar/editar um usuario :3
  saveUser(){
    const objUserform: User = this.formUser.getRawValue();

    this.userService.addUser(objUserform).then(
    (response: any) => {
      window.alert('Usuario salvo com sucesso')
      this.closeModal();
  })
  .catch(
    err => {
      window.alert('Erro ao Salvar o Usuario')
      console.error(err)
    });
  }
 
  buildForm(){
    this.formUser = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required,  Validators.email]],
      sector: [null, [Validators.required,  Validators.minLength(2)]],
      role: [null, [Validators.required,  Validators.minLength(5)]],
      healthPlan: [""],
      dentalPlan: [""],
    })
  }

  closeModal() { this.dialogRef.close();}
}
