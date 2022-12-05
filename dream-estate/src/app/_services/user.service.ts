import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../_models/user';

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
  postUser(user: User): Observable<User>{
    console.log("CALL API");
    let url = environment.apiBase+"/user";
    return this.http.post<User>(url, user, this.httpOptions);
  }
  constructor(private http: HttpClient){}
}


