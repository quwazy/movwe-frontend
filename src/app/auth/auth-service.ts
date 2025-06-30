import { Injectable } from '@angular/core';
import { auth } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public readonly employeeApiUrl: string = `${auth.apiUrl}/employee`;
  public readonly clientApiUrl: string = `${auth.apiUrl}/client`;

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
