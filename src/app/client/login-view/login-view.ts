import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth-service';

@Component({
  selector: 'app-login-view',
  imports: [FormsModule],
  templateUrl: './login-view.html',
  styleUrl: './login-view.css'
})
export class LoginViewClient{
  protected email: string = '';
  protected password: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  login() {
    this.authService.clearToken();

    this.authService.loginClient(this.email, this.password).subscribe({
      next: (response) => {
        this.authService.setToken(response.token);
        this.router.navigate(['/movie-view-client']);
      },
      error: (error) => {
        alert('Login failed. Please check your credentials.' + error.message);
      }
    });
  }

  signUp() {
    this.router.navigate(['/sign-in']);
  }
}
