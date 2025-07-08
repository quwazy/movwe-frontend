import { Component } from '@angular/core';
import { NavBar } from '../nav-bar-view/nav-bar';
import { CommonModule } from '@angular/common';
import { FriendService } from '../tools/services/friends-service';
import { SingleFriendView } from '../single-friend-view/single-friend-view';
import { Friend } from '../tools/models/movie.interface';

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

  viewFriend(friend: Friend) {
    console.log('View friend:', friend);
  }

  removeFriend(friend: Friend) {
    this.friendService.removeFriend(friend).subscribe({
      next: () => {
        this.loadFriends(); // Refresh list after removal
      },
      error: (err) => {
        console.error('Error removing friend:', err);
      }
      });
    }
}
