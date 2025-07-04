import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { auth } from '../../environments/environment';
import { LoginRequest, LoginResponse, CreateClient } from './auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public readonly employeeApiUrl: string = `${auth.apiUrl}/employee`;
  public readonly clientApiUrl: string = `${auth.apiUrl}/client`;
  public readonly createClientApiUrl: string = `${auth.apiUrl}/createClient`;

  constructor(private http: HttpClient) {}

  loginClient(email: string, password: string): Observable<LoginResponse> {
    this.clearToken();
    const loginRequest: LoginRequest = { email, password };
    return this.http.post<LoginResponse>(this.clientApiUrl, loginRequest);
  }

  loginEmployee(email: string, password: string): Observable<LoginResponse> {
    this.clearToken();
    const loginRequest: LoginRequest = { email, password };
    return this.http.post<LoginResponse>(this.employeeApiUrl, loginRequest);
  }

  createClient(client: CreateClient): Observable<any> {
    this.clearToken();
    return this.http.post(`${this.createClientApiUrl}`, client);
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
