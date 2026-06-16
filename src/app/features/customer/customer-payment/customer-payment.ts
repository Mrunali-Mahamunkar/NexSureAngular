import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe, CurrencyPipe } from '@angular/common';
import { PaymentService } from '../../../core/services/payment.service';

@Component({
  selector: 'app-customer-payment',
  standalone: true,
  imports: [
    CommonModule,
    DatePipe,
    CurrencyPipe
  ],
  templateUrl: './customer-payment.html',
  styleUrl: './customer-payment.scss'
})
export class CustomerPayment implements OnInit {

  payments: any[] = [];

  loading = true;

  constructor(
    private paymentService: PaymentService
  ) { }

  ngOnInit(): void {

    // Replace with logged-in customer id later
    this.loadPayments(1);

  }

  loadPayments(customerId: number) {

    this.loading = true;

    this.paymentService
      .getPaymentHistory(customerId)
      .subscribe((res: any) => {

        this.payments = res;

        this.loading = false;

      });

  }

}