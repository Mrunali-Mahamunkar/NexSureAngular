import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';
import { roleGuard } from './core/guards/role-guard';
import { Login } from './auth/login/login';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    component: Login
  },

  {
    path: '',
    component: MainLayout,

    children: [

      {
        path: 'admin',
        canActivate: [roleGuard],
        data: { role: 'Admin' },

        loadChildren: () =>
          import('./features/admin/admin.routes')
            .then(m => m.ADMIN_ROUTES)
      },

      {
        path: 'agent',
        canActivate: [roleGuard],
        data: { role: 'Agent' },

        loadChildren: () =>
          import('./features/agent/agent.routes')
            .then(m => m.AGENT_ROUTES)
      },

      {
        path: 'customer',
        canActivate: [roleGuard],
        data: { role: 'Customer' },

        loadChildren: () =>
          import('./features/customer/customer.routes')
            .then(m => m.CUSTOMER_ROUTES)
      }

    ]

  },

  {
    path: '**',
    redirectTo: 'login'
  }

];