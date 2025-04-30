import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { LoginPageComponent } from 'src/app/auth/login-page/login-page.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

test:any
  constructor(private user: AuthService,  ){

  }

  ngOnInit(){
    this.getData();
    // this.login.email;
    this.testData();

    
  }

  testData(){
      this.user.subject.subscribe((data: any)=>{
        console.log('test user name' , data.email)
        this.test = data.email;

      })
  }

  getData(){
    this.user.get().subscribe((data)=>{
      console.log('test data', data)

      data.filter((data)=>{

      })
    })
  }
}
