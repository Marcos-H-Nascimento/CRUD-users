import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CrudComponent } from './pages/crud/crud.component';

const routes: Routes = [
  // caso for nulo
  {path: '', component: LoginComponent},
  // caminho/ rota da url
  {path: 'login', component: LoginComponent},
  // path pro home
  {path: 'home', component: HomeComponent},
  // path pro crud
  {path: 'crud', component: CrudComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
