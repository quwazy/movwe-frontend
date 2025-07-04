import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = `${environment.apiUrl}/movies`;

  constructor(private http: HttpClient) { }

  // Get a movie by ID
  // Not used in the current implementation
  getMovieById(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.apiUrl}/getById/${id}`);
  }

  // Get a movie by client's email
  getMovieByEmail(email: string): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(`${this.apiUrl}/getByEmail/${email}`);
  }

  // Get all movies
  getAllMovies(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(this.apiUrl+"/getAll");
  }

  // Delete movie by ID
  deleteMovieById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteById/${id}`);
  }
}
