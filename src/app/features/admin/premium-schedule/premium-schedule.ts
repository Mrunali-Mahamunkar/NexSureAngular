import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PremiumScheduleService } from '../../../core/services/premium-schedule.service';

@Component({
  selector: 'app-premium-schedule',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DatePipe,
    CurrencyPipe
  ],
  templateUrl: './premium-schedule.html',
  styleUrl: './premium-schedule.scss'
})
export class PremiumSchedule implements OnInit {

  schedules:any=[];

  loading=true;

  searchText="";

  currentPage=1;

  pageSize=10;

  constructor(
    private premiumService:PremiumScheduleService
  ){ }

  ngOnInit():void{

    this.loadSchedules();

  }

  loadSchedules(){

    this.loading=true;

    this.premiumService
    .getAll(
      this.currentPage,
      this.pageSize
    )
    .subscribe((res:any)=>{

      this.schedules=res.items;

      this.loading=false;

    });

  }

  markPaid(id:number){

    this.premiumService
    .markAsPaid(id)
    .subscribe(()=>{

      this.loadSchedules();

    });

  }

  nextPage(){

    this.currentPage++;

    this.loadSchedules();

  }

  previousPage(){

    if(this.currentPage>1){

      this.currentPage--;

      this.loadSchedules();

    }

  }

  get paidCount(): number {

  return this.schedules.filter((x: any) => x.isPaid).length;

}

get pendingCount(): number {

  return this.schedules.filter((x: any) => !x.isPaid).length;

}

get totalPremium(): number {

  return this.schedules.reduce(

    (sum: number, x: any) => sum + x.premiumAmount,

    0

  );

}

}