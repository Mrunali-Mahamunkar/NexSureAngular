import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Chart } from 'chart.js/auto';

import { AgentService } from '../../../core/services/agent.service';

@Component({
  selector: 'app-agent-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CurrencyPipe,
    DatePipe
  ],
  templateUrl: './agent-dashboard.html',
  styleUrl: './agent-dashboard.scss'
})
export class AgentDashboard implements OnInit {

  // ======================
  // Dashboard Data
  // ======================

  profile: any = {};

  customers: any = {};

  commissions: any = {};

  summary: any = {};

  // ======================
  // Loading
  // ======================

  loading = true;

  // ======================
  // Search
  // ======================

  searchText = '';

  // ======================
  // Pagination
  // ======================

  currentPage = 1;

  pageSize = 10;

  totalRecords = 0;

  // ======================
  // Date Filter
  // ======================

  fromDate = '';

  toDate = '';

  // ======================
  // Chart
  // ======================

  commissionChart: any;

  constructor(
    private agentService: AgentService
  ) { }

  ngOnInit(): void {

    this.loadDashboard();

  }

  loadDashboard() {

    this.loading = true;

    this.agentService.getProfile()

      .subscribe((res: any) => {

        this.profile = res.data;

      });

    this.agentService.getCustomers(

      this.currentPage,

      this.pageSize,

      this.searchText

    )

    .subscribe((res: any) => {

      this.customers = res.data;

    });

    this.agentService.getCommissions(

      this.currentPage,

      this.pageSize

    )

    .subscribe((res: any) => {

      this.commissions = res.data;

    });

    this.agentService.getCommissionSummary()

      .subscribe((res: any) => {

        this.summary = res.data;

        this.loading = false;

        this.createCommissionChart();

      });

  }

  createCommissionChart() {

    if (!this.summary)
      return;

    this.commissionChart = new Chart("commissionChart", {

      type: "bar",

      data: {

        labels: [

          "Total",

          "This Month",

          "This Year"

        ],

        datasets: [

          {

            label: "Commission",

            data: [

              this.summary.totalCommission,

              this.summary.thisMonthCommission,

              this.summary.thisYearCommission

            ]

          }

        ]

      },

      options: {

        responsive: true

      }

    });

  }

  searchCustomer() {

    this.loadDashboard();

  }

  applyFilter() {

    console.log(this.fromDate);

    console.log(this.toDate);

  }

  nextPage() {

    this.currentPage++;

    this.loadDashboard();

  }

  previousPage() {

    if (this.currentPage > 1) {

      this.currentPage--;

      this.loadDashboard();

    }

  }

}