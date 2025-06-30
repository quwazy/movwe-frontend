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
}
