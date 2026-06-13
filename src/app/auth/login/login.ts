import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth-service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  login() {
    if (this.loginForm.invalid) return;

    this.auth.login(this.loginForm.value).subscribe((res: any) => {
 console.log('LOGIN RESPONSE:', res); // 👈 ADD THIS
      this.auth.saveToken(res.token);

      const role = this.auth.getRole()?.toLowerCase();

const routeMap: any = {
  admin: '/admin/dashboard',
  agent: '/agent/dashboard',
  customer: '/customer/dashboard'
};

const route = routeMap[role!];

if (route) {
  this.router.navigate([route]);
} else {
  console.log('Invalid role:', role);
}
    });
  }
}
