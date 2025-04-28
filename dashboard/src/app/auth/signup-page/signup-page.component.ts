import { Component } from '@angular/core';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent {
  firstname: string = '';
  lastname: string = '';
  email: string = '';
  password: string = '';
  submitted: boolean = false;

  // Submit function for form
  OnSubmit() {
    this.submitted = true;
    if (this.email && this.email.endsWith('@gmail.com')) {
      alert('Form submitted successfully!');
      this.firstname = '';
      this.lastname = '';
      this.email = '';
      this.password = '';
    } else {
      alert('Please enter a valid Gmail address ending with @gmail.com');
    }
  }
}
