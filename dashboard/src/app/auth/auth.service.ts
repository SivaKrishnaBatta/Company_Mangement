import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface User{
  id?:number;
  FirstName:string;
  LastName:string;
  email:string;
  password:string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private ApiUrl = "http://localhost:3000/users";


  public subject= new Subject()

  constructor(private http:HttpClient) {  }


  sendData(data: any){
    this.subject.next(data);
  }

  addUser(user:User):Observable<User>{
   return this.http.post<User>(this.ApiUrl,user);
  }


  get(): Observable<User[]>{
    return this.http.get<User[]>(this.ApiUrl);
  }

  getUserByEmail(email: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.ApiUrl}?email=${email}`);
  }

  login(email: string, password: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.ApiUrl}?email=${email}&password=${password}`);
  }
}
