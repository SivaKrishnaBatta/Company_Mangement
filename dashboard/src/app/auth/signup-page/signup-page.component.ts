import { Component, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, User } from '../auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements AfterViewInit {
  user: User = {
    FirstName: "",
    LastName: "",
    email: "",
    password: ""
  };

  constructor(private userServices: AuthService ,private router:Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.userServices.getUserByEmail(this.user.email).subscribe(existingUsers => {
        if (existingUsers.length > 0) {
          alert("Email already exists! Please use a different email.");
        } else {
          this.userServices.addUser(this.user).subscribe(() => {
            alert("User added successfully!");
            form.reset();
            this.router.navigate(['/login']);
          });
        }
      });
    }
  }

  myInput!: HTMLInputElement;
  letter!: HTMLElement;
  capital!: HTMLElement;
  number!: HTMLElement;
  length!: HTMLElement;
  message!: HTMLElement;

  ngAfterViewInit() {
    this.myInput = document.getElementById('psw') as HTMLInputElement;
    this.letter = document.getElementById('letter') as HTMLElement;
    this.capital = document.getElementById('capital') as HTMLElement;
    this.number = document.getElementById('number') as HTMLElement;
    this.length = document.getElementById('length') as HTMLElement;
    this.message = document.getElementById('message') as HTMLElement;

    this.myInput.onfocus = () => {
      this.message.style.display = "block";
    };

    this.myInput.onblur = () => {
      this.message.style.display = "none";
    };

    this.myInput.onkeyup = () => {
      this.validatePassword();
    };
  }

  validatePassword() {
    const lowerCaseLetters = /[a-z]/g;
    const upperCaseLetters = /[A-Z]/g;
    const numbers = /[0-9]/g;

    // Validate lowercase letters
    this.toggleClass(this.letter, this.myInput.value.match(lowerCaseLetters));

    // Validate capital letters
    this.toggleClass(this.capital, this.myInput.value.match(upperCaseLetters));

    // Validate numbers
    this.toggleClass(this.number, this.myInput.value.match(numbers));

    // Validate length
    this.toggleClass(this.length, this.myInput.value.length >= 8);
  }

  toggleClass(element: HTMLElement, condition: boolean | RegExpMatchArray | null) {
    if (condition) {
      element.classList.remove("invalid");
      element.classList.add("valid");
    } else {
      element.classList.remove("valid");
      element.classList.add("invalid");
    }
  }
}
