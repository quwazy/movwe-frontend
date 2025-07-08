import { Component } from '@angular/core';
import { NavBar } from '../nav-bar-view/nav-bar';
import { CommonModule } from '@angular/common';
import { FriendService } from '../tools/services/friends-service';
import { SingleFriendView } from '../single-friend-view/single-friend-view';
import { Friend } from '../tools/models/movie.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-friend-view',
  imports: [NavBar, CommonModule, SingleFriendView],
  templateUrl: './friend-view.html',
  styleUrl: './friend-view.css'
})
export class FriendView {
  friends: Array<Friend> = [];

  constructor(private friendService: FriendService, private router: Router) { }

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
    this.router.navigate(['/visit-friend', friend.username]);
  }

  removeFriend(friend: Friend) {
    this.friendService.removeFriend(friend).subscribe({
      next: () => {
        this.loadFriends();
      },
      error: (err) => {
        console.error('Error removing friend:', err);
      }
      });
    }
}
