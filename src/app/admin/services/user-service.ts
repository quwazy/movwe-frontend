import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { UserDto, CreateUserDto, UpdateUserDto } from '../models/user-interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly apiUrl = `${environment.apiUrl}/users`;

  constructor(private http: HttpClient) { }

  //Get by id
  getById(id: number): Observable<UserDto> {
    return this.http.get<UserDto>(`${this.apiUrl}/getById/}${id}`);
  }

  //Get all
  getAll(): Observable<Array<UserDto>> {
    return this.http.get<Array<UserDto>>(`${this.apiUrl}/getAll`);
  }

  //Create user
  create(createDto: CreateUserDto): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/create`, createDto);
  }

  //Update user
  update(updateDto: UpdateUserDto): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/update`, updateDto);
  }

  //Update status
  changeActive(id: number): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/active/${id}`, null);
  }

  //Delete user
  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteById/${id}`);
  }

  //Delete all users
  deleteAll(): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteAll`);
  }
}
