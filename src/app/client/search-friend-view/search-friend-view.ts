import { Component } from '@angular/core';
import { NavBar } from "../nav-bar-view/nav-bar";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FriendService } from '../tools/services/friends-service';
import { Friend } from '../tools/models/movie.interface';
import { SingleFriendView } from '../single-friend-view/single-friend-view';

@Component({
  selector: 'app-search-friend-view',
  imports: [NavBar, CommonModule, FormsModule, SingleFriendView],
  templateUrl: './search-friend-view.html',
  styleUrl: './search-friend-view.css'
})
export class SearchFriendView {
  searchBar: string = '';
  friends: Array<Friend> = [];

  constructor(private friendService: FriendService) {}

  searchFriends() {
    if (this.searchBar.trim() === '' || this.searchBar.length < 3) {
      return;
    }
    this.friendService.searchFriend(this.searchBar).subscribe({
      next: (friend) => {
        this.friends = friend;
      },
      error: (err) => {
        this.friends = [];
        console.error('Error searching for friend:', err);
      }
    });
  }

  viewFriend(friend: Friend) {
    console.log('View friend:', friend);
  }

  addFriend(friend: Friend) {
    this.friendService.addFriend(friend).subscribe({
      next: () => {
        this.searchBar = '';
        this.friends = [];
      },
      error: (err) => {
        alert('Error adding friend: ' + err.message);
      }
    });
  }
}
