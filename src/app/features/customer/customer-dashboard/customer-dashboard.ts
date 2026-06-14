import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Chart } from 'chart.js/auto';

import { CustomerService } from '../../../core/services/customer.service';

@Component({
  selector: 'app-customer-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DatePipe
  ],
  templateUrl: './customer-dashboard.html',
  styleUrl: './customer-dashboard.scss'
})
export class CustomerDashboard implements OnInit {

  profile: any = {};

  policies: any[] = [];

  claims: any[] = [];

  loading = true;

  searchText = '';

  currentPage = 1;

  pageSize = 10;

  customerChart: any;

  constructor(
    private customerService: CustomerService
  ) { }

  ngOnInit(): void {

    this.loadDashboard();

  }

  loadDashboard() {

    this.loading = true;

    this.customerService.getProfile()

      .subscribe((res: any) => {

        this.profile = res.data;

      });

    this.customerService.getPolicies()

      .subscribe((res: any) => {

        this.policies = res.data;

        this.createChart();

      });

    this.customerService.getClaims()

      .subscribe((res: any) => {

        this.claims = res.data;

        this.loading = false;

      });

  }

  createChart() {

    const active =
      this.policies.filter(
        (x: any) => x.policyStatus === "Active"
      ).length;

    const expired =
      this.policies.filter(
        (x: any) => x.policyStatus === "Expired"
      ).length;

    this.customerChart =
      new Chart("customerChart", {

        type: 'pie',

        data: {

          labels: [

            "Active",

            "Expired"

          ],

          datasets: [

            {

              data: [

                active,

                expired

              ]

            }

          ]

        },

        options: {

          responsive: true

        }

      });

  }

  searchPolicy() {

    console.log(this.searchText);

  }

  nextPage() {

    this.currentPage++;

  }

  previousPage() {

    if (this.currentPage > 1) {

      this.currentPage--;

    }

  }

}