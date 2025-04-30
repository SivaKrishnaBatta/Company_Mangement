import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { AuthService, User } from '../auth.service';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  email='';
  password='';
  errorMsg=''

  constructor(private authService:AuthService, private router:Router){}

   


    


  getData(form:NgForm){
    this.authService.sendData(form.value);
  }


  onLogin(form: NgForm) {
    this.getData(form);
    if (form.valid) {
      this.authService.login(this.email, this.password).subscribe((users) => {
        if (users.length > 0) {
          this.router.navigate(['/header']);  // Must configure this route
        } else {
          this.errorMsg = 'Invalid email or password';
        }
      });
    }
  }
 
 
  

}
