import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Client } from '../models/client.interface';
import { ClientService } from '../services/client-service';
import { NavBar } from '../nav-bar/nav-bar';

@Component({
  selector: 'app-client-view',
  imports: [CommonModule, NavBar, FormsModule],
  templateUrl: './client-view.html',
  styleUrl: './client-view.css'
})
export class ClientView implements OnInit {
  protected selectedClient: Client | null = null;
  protected clientList: Array<Client> = [];

  searchId: number | null = null;
  searchEmail: string | null = null;

  constructor(private clientService: ClientService) { }
  
  ngOnInit() {
    this.loadClients();
  }

  onSearchById(): void {
    if(this.searchId != null){
      this.searchClientById(this.searchId);
      this.searchId = null;
    }
  }

  onSearchByEmail(): void {
    if(this.searchEmail != null){
      this.searchClientByEmail(this.searchEmail);
      this.searchEmail = "";
    }
  }

  toggleActivation(): void {
    if (this.selectedClient) {
      this.changeStatus(this.selectedClient.email);
    }
  }

  confirmDelete(): void {
    const confirmed = confirm('Are you sure you want to delete this client?');
    if (confirmed && this.selectedClient) {
      this.deleteClientByEmail(this.selectedClient.email);
    }
  }

  private loadClients() {
    this.clientService.getAllClients().subscribe({
      next: (clients) => {
        this.clientList = clients;
      },
      error: (error) => {
        alert('Error loading clients. ' + error.message);
      }
    });
  }

  private searchClientById(id: number) {
    this.clientService.getClientById(id).subscribe({
      next: (client) => {
        this.selectedClient = client;
      },
      error: (error) => {
        alert('Error loading client. ' + error.message);
      }
    });
  }

  private searchClientByEmail(email: string) {
    this.clientService.getClientByEmail(email).subscribe({
      next: (client) => {
        this.selectedClient = client;
      },
      error: (error) => {
        alert('Error loading client. ' + error.message);
      }
    });
  }

  private changeStatus(email: string): void {
    this.clientService.changeClientStatus(email).subscribe({
      next: () => {
        if (this.selectedClient) {
          this.selectedClient.active = !this.selectedClient.active;
          this.selectedClient = null;
        }
      },
      error: (err) => {
        alert('Error updating client: ' + err.message);
      }
    });
  }

  private deleteClientByEmail(email: string): void {
    this.clientService.deleteClientByEmail(email).subscribe({
      next: () => {
        alert('Client deleted successfully.');
        this.selectedClient = null;
      },
      error: (err) => {
        alert('Error deleting client: ' + err.message);
      }
    });
  }
}
