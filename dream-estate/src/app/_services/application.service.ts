import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Application } from '../_models/application';
import { Pledge } from '../_models/pledge';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  getNeedFunding(): Observable<Application[]>{
    let url = environment.apiBase+"/seeking-funding";
    return this.http.get<Application[]>(url, this.httpOptions);
  }
  postPledge(pledge: Pledge): Observable<Pledge>{
    let url = environment.apiBase+"/pledge";
    return this.http.post<Pledge>(url, pledge, this.httpOptions);
  }
  postApplication(application: Application): Observable<Application>{
    let url = environment.apiBase+"/application";
    return this.http.post<Application>(url, application, this.httpOptions);
  }
  updateApplication(application: Application): Observable<Application>{
    let url = environment.apiBase+"/application";
    return this.http.put<Application>(url, application, this.httpOptions);
  }
  constructor(private http: HttpClient){}
}


