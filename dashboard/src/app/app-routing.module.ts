import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupPageComponent } from './auth/signup-page/signup-page.component';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { HeaderComponent } from './dashboard/layouts/dashboard-home/header/header.component';

const routes: Routes = [
  {path:'',component:LoginPageComponent},
  {path:'login', component:LoginPageComponent},
  {path:'signUp', component:SignupPageComponent},
  {path:'header', component:HeaderComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
