import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = `${environment.apiUrl}/movwe`;

  constructor(private http: HttpClient) { }

  // Get all movies from Client
  getAllMovies(): Observable<any> {
    return this.http.get<Array<Movie>>(`${this.apiUrl}/getAllMovies`);
  }
}