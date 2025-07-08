import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Friend } from '../tools/models/movie.interface';

@Component({
  selector: 'app-single-friend-view',
  imports: [CommonModule],
  templateUrl: './single-friend-view.html',
  styleUrl: './single-friend-view.css'
})
export class SingleFriendView {
  page: number = 0;
  @Input() friend: Friend = { username: '', email: '' };
  @Input() context: 'remove' | 'search' = 'remove';

  @Output() viewFriend = new EventEmitter<Friend>();
  @Output() addFriend = new EventEmitter<Friend>();
  @Output() removeFriend = new EventEmitter<Friend>();

  onViewFriend() {
    this.viewFriend.emit(this.friend);
  }

  onAddFriend() {
    this.addFriend.emit(this.friend);
  }

  onRemoveFriend() {
    this.removeFriend.emit(this.friend);
  }
}
