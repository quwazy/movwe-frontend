import { Injectable } from '@angular/core';
import { auth } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { LoginResponse } from './auth.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public readonly employeeApiUrl: string = `${auth.apiUrl}/employee`;
  public readonly clientApiUrl: string = `${auth.apiUrl}/client`;

  constructor(private http: HttpClient) {}

  loginClient(email: string, password: string): Observable<LoginResponse> {
    const credentials = { email, password };
    return this.http.post<LoginResponse>(this.clientApiUrl, credentials);
  }

  loginEmployee(email: string, password: string): Observable<LoginResponse> {
    const credentials = { email, password };
    return this.http.post<LoginResponse>(this.employeeApiUrl, credentials);
  }

  setToken(jwt: string) {
    sessionStorage.setItem('token', jwt);
  }

  getToken(): string | null {
    return sessionStorage.getItem('token');
  }

  clearToken() {
    sessionStorage.removeItem('token');
  }
}
