import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../_models/user';
import { Application } from '../_models/application';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  getUser(email:string): Observable<User>{
    let url = environment.apiBase+"/user/"+email;
    return this.http.get<User>(url, this.httpOptions);
  }
  getUserApplication(user:User): Observable<Application>{
    let url = environment.apiBase+"/user/application/";
    return this.http.post<Application>(url, user, this.httpOptions);
  }
  postUser(user: User): Observable<User>{
    let url = environment.apiBase+"/user";
    return this.http.post<User>(url, user, this.httpOptions);
  }
  logout(user: User): Observable<User>{
    let url = environment.apiBase+"/user/logout";
    return this.http.post<User>(url, user, this.httpOptions);
  }
  validateToken(user: User): Observable<User>{
    let url = environment.apiBase+"/user/validate";
    return this.http.post<User>(url, user, this.httpOptions);
  }
  tryLogin(user: User): Observable<User>{
    let url = environment.apiBase+"/user/login";
    return this.http.post<User>(url, user, this.httpOptions);
  }
  constructor(private http: HttpClient){}
}


