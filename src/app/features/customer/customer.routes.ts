import { Routes } from "@angular/router";
import { CustomerDashboard } from "./customer-dashboard/customer-dashboard";
import { CustomerPremiumSchedule } from './customer-premium-schedule/customer-premium-schedule';
import { CustomerPayment } from './customer-payment/customer-payment';

export const CUSTOMER_ROUTES: Routes = [
  { path: 'dashboard', component: CustomerDashboard },
  {
    path: 'premium-schedule',
    component: CustomerPremiumSchedule
  },
  {
    path:'payment',
    component:CustomerPayment
  },

  
];