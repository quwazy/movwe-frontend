import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FriendService } from '../services/friends-service';

@Component({
  selector: 'app-single-friend-view',
  imports: [],
  templateUrl: './single-friend-view.html',
  styleUrl: './single-friend-view.css'
})
export class SingleFriendView {
  @Input() username: string = '';

  @Output() viewFriend = new EventEmitter<string>();
  @Output() removeFriend = new EventEmitter<string>();

  constructor(private friendService: FriendService) { }

  onViewFriend() {
    this.viewFriend.emit(this.username);
  }

  //remove friend
  onRemoveFriend() {
    this.removeFriend.emit(this.username);
  }
}
