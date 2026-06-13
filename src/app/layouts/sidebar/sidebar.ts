import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {

   menuItems: any[] = [];

  ngOnInit() {
    const role = localStorage.getItem('role');

    if (role === 'Admin') {
      this.menuItems = [
        { name: 'Dashboard', route: '/admin/dashboard', icon: 'dashboard' }
      ];
    }

    if (role === 'Agent') {
      this.menuItems = [
        { name: 'Dashboard', route: '/agent/dashboard', icon: 'dashboard' }
      ];
    }

    if (role === 'Customer') {
      this.menuItems = [
        { name: 'Dashboard', route: '/customer/dashboard', icon: 'dashboard' }
      ];
    }
  }
}
