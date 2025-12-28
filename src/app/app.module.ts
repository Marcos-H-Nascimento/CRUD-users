import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Angular Material
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire/compat';
import { CrudComponent } from './pages/crud/crud.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ComponentsModule } from './components/components.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ModalViewUserComponent } from './pages/crud/modal-view-user/modal-view-user.component';
import { ModalFormUserComponent } from './pages/crud/modal-form-user/modal-form-user.component';
import {MatSelectModule} from '@angular/material/select';
// quando for mudar o CrudComponent, não esqueça de colocar ele no imports, ele é um component standalone
// plmds, n esquece q essa merda é standalone eu sinceramente cogitei em atentados contra a minha própria vida arrumando esse codigo

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ModalViewUserComponent,
    ModalFormUserComponent,
  ],
  imports: [
    ComponentsModule,
    CrudComponent,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    NoopAnimationsModule,
    // angular material
    MatSortModule,
    MatPaginatorModule,
    MatTableModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
