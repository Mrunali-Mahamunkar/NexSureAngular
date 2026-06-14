import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiUrl = `${environment.apiUrl}/v1/customer`;

  constructor(private http: HttpClient) { }

  // Get Customer Profile
  getProfile(): Observable<any> {
    return this.http.get(`${this.apiUrl}/profile`);
  }

  // Get Customer Policies
  getPolicies(): Observable<any> {
    return this.http.get(`${this.apiUrl}/policies`);
  }

  // Get Customer Claims
  getClaims(): Observable<any> {
    return this.http.get(`${this.apiUrl}/claims`);
  }

}