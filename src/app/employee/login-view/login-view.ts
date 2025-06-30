import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginResponse } from '../../auth/auth.interface';
import { AuthService } from '../../auth/auth-service';

@Component({
  selector: 'app-login-view',
  imports: [FormsModule],
  templateUrl: './login-view.html',
  styleUrl: './login-view.css'
})
export class LoginView {
  protected email: string = '';
  protected password: string = '';

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) { }

  login() {
    const credentials = { 
      email: this.email, 
      password: this.password 
    };

    return this.http.post<LoginResponse>(this.authService.employeeApiUrl, credentials).subscribe({
      next: (response) => {
        this.authService.setToken(response.token);
        this.router.navigate(['/client-view']);
      },
      error: (error) => {
        alert('Login failed. Please check your credentials.');
      }
    });
  }
}
