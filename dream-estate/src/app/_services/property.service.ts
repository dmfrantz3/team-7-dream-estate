import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Property } from '../_models/property';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  getPropertyList(): Observable<Property[]>{
    let url = environment.apiBase+"/property";
    return this.http.get<Property[]>(url, this.httpOptions);
  }
  constructor(private http: HttpClient){}
}


