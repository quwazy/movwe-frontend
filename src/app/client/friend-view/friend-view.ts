import { Component } from '@angular/core';
import { NavBar } from '../nav-bar/nav-bar';
import { CommonModule } from '@angular/common';
import { FriendService } from '../services/friends-service';
import { SingleFriendView } from '../single-friend-view/single-friend-view';
import { Friend } from '../models/movie.interface';

@Component({
  selector: 'app-friend-view',
  imports: [NavBar, CommonModule, SingleFriendView],
  templateUrl: './friend-view.html',
  styleUrl: './friend-view.css'
})
export class FriendView {
  friends: Array<Friend> = [];

  constructor(private friendService: FriendService) { }

  ngOnInit() {
    this.loadFriends();
  }

  loadFriends() {
    this.friendService.getFriendList().subscribe({
      next: (friends) => {
        this.friends = friends;
      },
      error: (err) => {
        console.error('Error loading friends:', err);
      }
    });
  }

  viewFriend(username: string) {
    // Handle view friend logic here
    console.log('View friend:', username);
  }

  removeFriend(username: string) {
      // Handle remove friend logic here
      this.friendService.removeFriend(username).subscribe({
        next: () => {
          this.loadFriends(); // Refresh list after removal
        },
        error: (err) => {
          console.error('Error removing friend:', err);
        }
      });
    }
}
