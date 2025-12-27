import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-form-user',
  templateUrl: './modal-form-user.component.html',
  styleUrl: './modal-form-user.component.scss'
})
export class ModalFormUserComponent {
  ngOnInit(){
    this.buildForm();
  }


  formUser!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ModalFormUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}
  buildForm(){
    this.formUser = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required,  Validators.email]],
      sector: [null, [Validators.required,  Validators.minLength(2)]],
      role: [null, [Validators.required,  Validators.minLength(5)]],
      healthPlan: [""],
      dentalPLan: [""],
    })
  }

  closeModal() { this.dialogRef.close();}
}
