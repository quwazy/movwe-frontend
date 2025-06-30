import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Client } from '../models/client.interface';
import { ClientService } from '../services/client-service';

@Component({
  selector: 'app-client-view',
  imports: [CommonModule],
  templateUrl: './client-view.html',
  styleUrl: './client-view.css'
})
export class ClientView implements OnInit {
  protected clientList: Array<Client> = [];

  constructor(private clientService: ClientService) { }
  
  ngOnInit() {
    this.loadClients();
  }

  private loadClients() {
    this.clientService.getAllClients().subscribe({
      next: (clients) => {
        this.clientList = clients;
        console.log('Clients loaded:', this.clientList);
      },
      error: (error) => {
        alert('Error loading clients. Please try again later.');
        console.error('Error loading clients:', error);
      }
    });
  }
}
