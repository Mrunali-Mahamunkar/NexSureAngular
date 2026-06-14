import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private apiUrl = `${environment.apiUrl}/v1/reports`;

  constructor(private http: HttpClient) { }


  getPolicyReport(): Observable<any> {

    return this.http.get(`${this.apiUrl}/policies`);

  }

  getPremiumReport(): Observable<any> {

    return this.http.get(`${this.apiUrl}/premiums`);

  }

  getClaimReport(): Observable<any> {

    return this.http.get(`${this.apiUrl}/claims`);

  }

  getRevenueReport(): Observable<any> {

    return this.http.get(`${this.apiUrl}/revenue`);

  }

  getAgentPerformanceReport(): Observable<any> {

    return this.http.get(`${this.apiUrl}/agent-performance`);

  }

}