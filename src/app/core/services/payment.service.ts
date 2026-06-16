import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private apiUrl =
    `${environment.apiUrl}/v1/payment`;

  constructor(
    private http: HttpClient
  ) { }

  createOrder(scheduleId:number){

    return this.http.post(

`${this.apiUrl}/create-order`,

{
 scheduleId:scheduleId
}

    );

  }

  verifyPayment(data:any){

    return this.http.post(

`${this.apiUrl}/verify-payment`,

data

    );

  }

  getPaymentHistory(customerId:number){

    return this.http.get(

`${this.apiUrl}/history/${customerId}`

    );

  }

  getPaymentById(id:number){

    return this.http.get(

`${this.apiUrl}/${id}`

    );

  }

  getAllPayments(page:number,pageSize:number){

    return this.http.get(

`${this.apiUrl}?pageNumber=${page}&pageSize=${pageSize}`

    );

  }

  getDashboard(){

    return this.http.get(

`${this.apiUrl}/dashboard`

    );

  }

}