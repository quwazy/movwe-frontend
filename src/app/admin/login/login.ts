import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth-service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  protected email: string = '';
  protected password: string = '';

  constructor(private router: Router, private authService: AuthService) { }

  login() {
    this.authService.loginModerator(this.email, this.password).subscribe({
      next: (response) => {
        this.authService.setToken(response.token);
        this.router.navigate(['admin/view-users']);
      },
      error: (error) => {
        alert('Login failed. Please check your credentials.' + error.message);
      }
    });
  }
}
