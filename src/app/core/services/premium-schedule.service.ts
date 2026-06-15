import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PremiumScheduleService {

  private apiUrl =
    `${environment.apiUrl}/v1/PremiumSchedule`;

  constructor(private http: HttpClient) { }

  getAll(page:number,pageSize:number):Observable<any>{

    return this.http.get(

`${this.apiUrl}?PageNumber=${page}&PageSize=${pageSize}`

    );

  }

  getById(id:number):Observable<any>{

    return this.http.get(

`${this.apiUrl}/${id}`

    );

  }

  getByPolicy(policyId:number):Observable<any>{

    return this.http.get(

`${this.apiUrl}/policy/${policyId}`

    );

  }

  markAsPaid(scheduleId:number){

    return this.http.put(

`${this.apiUrl}/${scheduleId}/paid`,{}

    );

  }

}