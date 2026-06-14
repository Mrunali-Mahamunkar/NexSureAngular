import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Chart } from 'chart.js/auto';

import { ReportService } from '../../../core/services/report.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CurrencyPipe,
    DatePipe
  ],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.scss'
})
export class AdminDashboard implements OnInit {

  policyReport: any = {};
  premiumReport: any = {};
  claimReport: any = {};
  revenueReport: any = {};
  agentPerformance: any = {};

  loading = true;
  searchText = "";
  currentPage = 1;
  pageSize = 10;
  totalRecords = 0;
  fromDate = "";
  toDate = "";
  revenueChart: any;
  constructor(
    private reportService: ReportService
  ) { }

  ngOnInit(): void {

    this.loadDashboard();

  }

  loadDashboard() {

    this.loading = true;

    this.reportService.getPolicyReport()

      .subscribe((res: any) => {

        this.policyReport = res.data;

      });

    this.reportService.getPremiumReport()

      .subscribe((res: any) => {

        this.premiumReport = res.data;

      });

    this.reportService.getClaimReport()

      .subscribe((res: any) => {

        this.claimReport = res.data;

      });

    this.reportService.getRevenueReport()

      .subscribe((res: any) => {

        this.revenueReport = res.data;

        this.createRevenueChart();

      });

    this.reportService.getAgentPerformanceReport()

      .subscribe((res: any) => {

        this.agentPerformance = res.data;

        this.loading = false;

      });

  }

  createRevenueChart() {

    if (!this.revenueReport.monthlyBreakdown)
      return;

    const labels =
      this.revenueReport.monthlyBreakdown.map(
        (x: any) => x.monthName
      );

    const values =
      this.revenueReport.monthlyBreakdown.map(
        (x: any) => x.revenue
      );

    this.revenueChart =
      new Chart("revenueChart", {

        type: 'bar',

        data: {

          labels: labels,

          datasets: [

            {

              label: "Revenue",

              data: values

            }

          ]

        },

        options: {

          responsive: true

        }

      });

  }

  search() {

    console.log(this.searchText);

  }

  applyFilter() {

    console.log(this.fromDate);

    console.log(this.toDate);

  }

  nextPage() {

    this.currentPage++;

  }

  previousPage() {

    if (this.currentPage > 1)

      this.currentPage--;

  }

}