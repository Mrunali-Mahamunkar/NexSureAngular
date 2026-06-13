import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth-service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  constructor(private ts:AuthService){}

  Logout()
  {
    this.ts.logout();
  }
}
