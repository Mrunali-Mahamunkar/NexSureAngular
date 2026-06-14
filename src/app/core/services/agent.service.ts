import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  private apiUrl = `${environment.apiUrl}/v1/agent`;

  constructor(private http: HttpClient) { }

  // ===========================
  // Agent Profile
  // ===========================

  getProfile(): Observable<any> {

    return this.http.get(`${this.apiUrl}/profile`);

  }

  // ===========================
  // Customers
  // ===========================

  getCustomers(
    page: number = 1,
    pageSize: number = 10,
    search: string = ''
  ): Observable<any> {

    return this.http.get(

      `${this.apiUrl}/customers?page=${page}&pageSize=${pageSize}&search=${search}`

    );

  }

  // ===========================
  // Commission History
  // ===========================

  getCommissions(
    page: number = 1,
    pageSize: number = 10
  ): Observable<any> {

    return this.http.get(

      `${this.apiUrl}/commissions?page=${page}&pageSize=${pageSize}`

    );

  }

  // ===========================
  // Commission Summary
  // ===========================

  getCommissionSummary(): Observable<any> {

    return this.http.get(

      `${this.apiUrl}/commissions/summary`

    );

  }

}