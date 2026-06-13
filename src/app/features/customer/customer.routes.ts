import { Routes } from "@angular/router";
import { CustomerDashboard } from "./customer-dashboard/customer-dashboard";

export const CUSTOMER_ROUTES: Routes = [
  { path: 'dashboard', component: CustomerDashboard }
];