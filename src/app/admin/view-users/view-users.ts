import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user-service';
import { UserDto, UpdateUserDto } from '../models/user-interface';
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
  protected selectedUserPassword: string | null = null;
  protected searchIdBar: number | null = null;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.selectedUser = null;
    this.getAll();
  }

  selectUser(user: UserDto): void {
    this.selectedUser = user;
  }

  searchById(): void {
    if (this.searchIdBar != null) {
      this.getById(this.searchIdBar);
      this.searchIdBar = null;
    }
  }

  updateUser(): void {
    if (this.selectedUser != null) {
      if (this.selectedUserPassword != null) {
        this.update(this.selectedUser, this.selectedUserPassword);
      } else {
        this.update(this.selectedUser, null);
      }
    }
  }

  updateStatus(): void {
    if (this.selectedUser != null) {
      this.updateActive(this.selectedUser.id);
    }
  }

  confirmDelete(): void {
    const confirmed = confirm('Are you sure you want to delete this client?');
    if (confirmed && this.selectedUser) {
      this.deleteUserById(this.selectedUser.id);
    }
  }

  private getAll() {
    this.userService.getAll().subscribe({
      next: (users) => {
        this.userList = users;
      },
      error: (error) => {
        alert('Error loading users. Message: ' + error.message);
      }
    });
  }

  private getById(id: number) {
    this.userService.getById(id).subscribe({
      next: (user) => {
        this.selectedUser = user;
      },
      error: (error) => {
        alert('Error searching user by id. Message: ' + error.message);
      }
    })
  }

  private update(userDto: UserDto, password: string | null) {
    const updateDto: UpdateUserDto = {
      id: userDto.id,
      email: userDto.email,
      username: userDto.username,
      ...(password ? { password } : {})
    }
    this.userService.update(updateDto).subscribe({
      next: () => {
        this.selectedUser = null;
        this.getAll();
      },
      error: (error) => {
        alert('Error updating user with id: ' + userDto.id + '\n Message: ' + error.message);
      }
    });
  }

  private updateActive(id: number | null | undefined): void {
    if (typeof id !== 'number'){
      return;
    }
    this.userService.changeActive(id).subscribe({
      next: () => {
        this.selectedUser = null;
        this.getAll();
      },
      error: (error) => {
        alert('Error updating user active, with id: '+ id + '\n Message: ' + error.message);
      }
    })
  }

  private deleteUserById(id: number){
    this.userService.deleteById(id).subscribe({
      next: () => {
        this.selectedUser = null;
        this.userList = this.userList.filter(user => user.id !== id);
      },
      error: (error) => {
        alert('Error deleting user with id: '+ id + '\n Message: ' + error.message);
      }
    })
  }
}
