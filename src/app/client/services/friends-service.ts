import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Friend } from '../models/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class FriendService {
  private apiUrl = `${environment.apiUrl}/movwe`;

  constructor(private http: HttpClient) { }

  // Get all friends from Client
  getFriendList(): Observable<Array<Friend>> {
    return this.http.get<Array<Friend>>(`${this.apiUrl}/getFriendList`);
  }

  // Add a friend to client
  addFriend(friend: Friend): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/addFriend`, friend);
  }

  // Search for a new friend by username
  searchFriend(username: string): Observable<Array<Friend>> {
    return this.http.get<Array<Friend>>(`${this.apiUrl}/searchFriend/${username}`);
  }

  // Remove a friend from client
  removeFriend(friend: Friend): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/removeFriend`, { body: friend });
  }
}
