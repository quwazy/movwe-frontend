import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Client } from '../models/client.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = environment.apiUrl + "/clients";

  constructor(private http: HttpClient) { }

  // Get a client by ID
  getClientById(id: number): Observable<Client> {
    return this.http.get<Client>(`${this.apiUrl+"/get/"}${id}`);
  }

  // Get a client by email
  getClientByEmail(email: string): Observable<Client> {
    return this.http.get<Client>(`${this.apiUrl+"/getByEmail/"}${email}`);
  }

  // Get all clients
  getAllClients(): Observable<Array<Client>> {
    return this.http.get<Array<Client>>(this.apiUrl+"/getAll");
  }

  // Active or deactivate a client
  changeClientStatus(email: string): Observable<Client> {
    return this.http.put<Client>(`${this.apiUrl}/active/${email}`, {});
  }

  // Delete a client by email
  deleteClientByEmail(email: string): Observable<void> {
    if (!email) {
      throw new Error('Email is required to delete a client.');
    }
    return this.http.delete<void>(`${this.apiUrl}/deleteByEmail/${email}`);
  }

  // Delete a client by ID
  // Not used in the current implementation
  deleteClientById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }

  // Delete all clients
  // Not used in the current implementation
  deleteAllClients(): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteAll`);
  }
}
