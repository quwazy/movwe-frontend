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

  removeFriend(username: string): Observable<void> {
    const dto: Friend = { username };
    return this.http.delete<void>(`${this.apiUrl}/removeFriend`, { body: dto });
  }
}
