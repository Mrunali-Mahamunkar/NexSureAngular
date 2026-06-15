import { Routes } from '@angular/router';
import { AdminDashboard } from './admin-dashboard/admin-dashboard';
import { PremiumSchedule } from './premium-schedule/premium-schedule';

export const ADMIN_ROUTES: Routes = [

  {
    path: 'dashboard',
    component: AdminDashboard
  },

  {
    path: 'premium-schedule',
    component: PremiumSchedule
  }

];