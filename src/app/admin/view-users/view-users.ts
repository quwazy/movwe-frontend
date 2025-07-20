import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user-service';
import { UserDto } from '../models/user-interface';
import { Navbar } from "../navbar/navbar";

@Component({
  selector: 'app-view-users',
  imports: [CommonModule, FormsModule, Navbar],
  templateUrl: './view-users.html',
  styleUrl: './view-users.css'
})
export class ViewUsers implements OnInit {
  protected userList: Array<UserDto> = [];
  protected selectedUser: UserDto | null = null;
  protected searchIdBar: number | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.selectedUser = null;
    this.loadUsers();
  }

  selectUser(user: UserDto): void {
    this.selectedUser = user;
  }

  searchById(): void {
    if(this.searchIdBar != null){
      this.getById(this.searchIdBar);
      this.searchIdBar = null;
    }
  }

  private loadUsers(){
    this.userService.getAll().subscribe({
      next: (users) => {
        this.userList = users;
      },
      error: (error) => {
        alert('Error loading users. Message: ' + error.message);
      }
    });
  }

  private getById(id: number){
    this.userService.getById(id).subscribe({
      next: (user) => {
        this.selectedUser = user;
      },
      error: (error) => {
alert('Error searching user by id. Message: ' + error.message);
      }
    })
  }
}
