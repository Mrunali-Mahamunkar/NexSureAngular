import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaymentService } from '../../../core/services/payment.service';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CurrencyPipe,
    DatePipe
  ],
  templateUrl: './payment.html',
  styleUrl: './payment.scss'
})
export class Payment implements OnInit {

  dashboard: any = {};

  payments: any[] = [];

  loading = true;

  currentPage = 1;

  pageSize = 10;

  searchText = "";

  constructor(
    private paymentService: PaymentService
  ) {}

  ngOnInit(): void {

    this.loadDashboard();

    this.loadPayments();

  }

  loadDashboard() {

    this.paymentService.getDashboard()
      .subscribe((res: any) => {

        this.dashboard = res;

      });

  }

  loadPayments() {

    this.loading = true;

    this.paymentService
      .getAllPayments(
        this.currentPage,
        this.pageSize
      )
      .subscribe((res: any) => {

        this.payments = res.items ?? res;

        this.loading = false;

      });

  }

  nextPage() {

    this.currentPage++;

    this.loadPayments();

  }

  previousPage() {

    if (this.currentPage > 1) {

      this.currentPage--;

      this.loadPayments();

    }

  }

}