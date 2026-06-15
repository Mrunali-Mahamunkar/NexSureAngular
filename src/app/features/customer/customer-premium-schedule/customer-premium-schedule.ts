import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe, CurrencyPipe } from '@angular/common';
import { CustomerPremiumScheduleService } from '../../../core/services/customer-premium-schedule.service';

@Component({
  selector:'app-customer-premium-schedule',
  standalone:true,
  imports:[
    CommonModule,
    DatePipe,
    CurrencyPipe
  ],
  templateUrl:'./customer-premium-schedule.html',
  styleUrl:'./customer-premium-schedule.scss'
})
export class CustomerPremiumSchedule implements OnInit{

  schedules:any=[];

  loading=true;

  constructor(
    private premiumService:CustomerPremiumScheduleService
  ){}

  ngOnInit(){

    // Replace 1 with actual customer's policy id

    this.loadSchedules(1);

  }

  loadSchedules(policyId:number){

    this.loading=true;

    this.premiumService
    .getSchedules(policyId)
    .subscribe((res:any)=>{

      this.schedules=res;

      this.loading=false;

    });

  }

  get paidCount(){

    return this.schedules.filter((x:any)=>x.isPaid).length;

  }

  get pendingCount(){

    return this.schedules.filter((x:any)=>!x.isPaid).length;

  }

}