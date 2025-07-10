import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth-service';

@Component({
  selector: 'app-sign-in-view',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sign-in-view.html',
  styleUrl: './sign-in-view.css'
})
export class SignInView {
  signInForm: FormGroup;
  passwordMismatch = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.signInForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit() {
    const { password, confirmPassword, ...formData } = this.signInForm.value;

    if (password !== confirmPassword) {
      this.passwordMismatch = true;
      return;
    }

    this.passwordMismatch = false;

    // Only sending username, email, and password
    const dataToSend = {
      username: formData.username,
      email: formData.email,
      password: password
    };

    if (this.signInForm.valid) {
      this.authService.createClient(this.signInForm.value).subscribe({
        next: (response) => {
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.error('Error creating client:', error);
        }
      });
    } else {
      this.signInForm.markAllAsTouched();
    }
  }
}
