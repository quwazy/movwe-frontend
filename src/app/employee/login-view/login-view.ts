import { Component } from '@angular/core';
import { auth } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginResponse } from '../models/client.interface';
import { AuthService } from '../../auth/auth-service';

@Component({
  selector: 'app-login-view',
  imports: [FormsModule],
  templateUrl: './login-view.html',
  styleUrl: './login-view.css'
})
export class LoginView {
  private apiUrl = auth.apiUrl+"/employee";
  protected email: string = '';
  protected password: string = '';

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) { }

  login() {
    const credentials = { email: this.email, password: this.password };
    return this.http.post<LoginResponse>(this.apiUrl, credentials).subscribe({
      next: (response) => {
        console.log('Login successful:', response);
        this.authService.setToken(response.token);
        this.router.navigate(['/client-view']);
      },
      error: (error) => {
        console.error('Login failed:', error);
        // Handle login error, e.g., show an error message
      }
    });
  }
}
