import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerPremiumScheduleService {

  private apiUrl =
    `${environment.apiUrl}/v1/PremiumSchedule`;

  constructor(private http: HttpClient) {}

  getSchedules(policyId:number){

    return this.http.get(

`${this.apiUrl}/policy/${policyId}`

    );

  }

}