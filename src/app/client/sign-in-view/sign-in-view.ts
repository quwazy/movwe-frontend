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
  signUpForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      username: ['', Validators.required],
      address: this.fb.group({
        street: [''],
        city: ['', ],
        state: ['', ],
        zip: ['',],
        phone: ['', [ Validators.pattern(/^\+?[0-9]{7,}$/)]]
      })
    });
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      this.authService.createClient(this.signUpForm.value).subscribe({
        next: (response) => {
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.error('Error creating client:', error);
        }
      });
    } else {
      this.signUpForm.markAllAsTouched();
    }
  }
}
