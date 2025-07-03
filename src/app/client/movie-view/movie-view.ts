import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../services/movie-service';
import { Movie } from '../models/movie.interface';
import { NavBar } from '../nav-bar/nav-bar';

@Component({
  selector: 'app-movie-view',
  imports: [CommonModule, NavBar],
  templateUrl: './movie-view.html',
  styleUrl: './movie-view.css'
})
export class MovieViewClient implements OnInit {
  protected movies: Array<Movie> = [];
  protected selectedMovie: Movie | null = null;

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService.getAllMovies().subscribe((data) => {
      this.movies = data;
    });
  }
}
