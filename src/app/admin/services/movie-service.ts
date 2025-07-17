import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { MovieDto, UpdateMovieDto } from '../models/movie-interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private readonly apiUrl = `${environment.apiUrl}/movies`;

  constructor(private http: HttpClient) { }

  //Get by id
  getById(id: number): Observable<MovieDto> {
    return this.http.get<MovieDto>(`${this.apiUrl}/getById/}${id}`);
  }

  //Get all
  getAll(): Observable<Array<MovieDto>> {
    return this.http.get<Array<MovieDto>>(`${this.apiUrl}/getAll`);
  }

  //Get all by user id
  getAllByUserId(id: number): Observable<Array<MovieDto>> {
    return this.http.get<Array<MovieDto>>(`${this.apiUrl}/getAllByUserId/${id}`);
  }

  //Update user
  update(updateDto: UpdateMovieDto): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/update`, updateDto);
  }

  //Delete user
  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteById/${id}`);
  }

  deleteAllByUserId(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteAllByUserId/${id}`);
  }

  //Delete all users
  deleteAll(): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteAll`);
  }
}
