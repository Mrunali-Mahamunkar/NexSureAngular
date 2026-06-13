import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  login(data: any) {
    return this.http.post(`${environment.apiUrl}/auth/login`, data);
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);

    try {
      const payload: any = jwtDecode(token);

      let role =
        payload.role ||
        payload[
          'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
        ];

      // Handle array roles
      if (Array.isArray(role)) {
        role = role[0];
      }

      localStorage.setItem('role', role);
    } catch (error) {
      console.error('Invalid token', error);
    }
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getRole() {
    return localStorage.getItem('role');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}