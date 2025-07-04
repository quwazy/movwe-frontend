import { Injectable } from '@angular/core';
import { auth } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { LoginResponse } from './auth.interface';
import { AddClient } from '../client/models/client.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public readonly employeeApiUrl: string = `${auth.apiUrl}/employee`;
  public readonly clientApiUrl: string = `${auth.apiUrl}/client`;
  public readonly addClientApiUrl: string = `${auth.apiUrl}/addClient`;

  constructor(private http: HttpClient) {}

  // Add a new Client
  addClient(client: AddClient): Observable<any> {
    return this.http.post(`${this.addClientApiUrl}`, client);
  }

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
