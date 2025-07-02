import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavBar } from '../nav-bar/nav-bar';
import { MovieService } from '../services/movie-service';
import { Movie } from '../models/movie.interface';

@Component({
  selector: 'app-movie-view',
  imports: [CommonModule, FormsModule, NavBar],
  templateUrl: './movie-view.html',
  styleUrl: './movie-view.css'
})
export class MovieView implements OnInit {
  protected selectedMovie: Movie | null = null;
  protected movieList: Array<Movie> = [];

  searchEmail: string | null = null;
  label: string = "Movie Preview";

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.loadMovies();
    this.label = "Movie Preview";
  }

  selectMovie(movie: Movie): void {
    this.selectedMovie = movie;
  }

  getAllByClientEmail(email: string): void {
    if (email !== null && email.trim() !== "") {
      this.getMoviesByClientEmail(email);
    }
  }

  onSearchByEmail(): void {
    if(this.searchEmail != null){
      this.getMoviesByClientEmail(this.searchEmail);
      this.searchEmail = "";
      this.selectedMovie = null;
    }
  }

  confirmDelete(): void {
    const confirmed = confirm('Are you sure you want to delete this movie?');
    if (confirmed && this.selectedMovie) {
      this.deleteMovieById(this.selectedMovie.movieId);
    }
  }

  private loadMovies(): void {
    this.movieService.getAllMovies().subscribe({
      next: (data) => {
        this.movieList = data;
      },
      error: (err) => {
        console.error('Error loading movies', err);
      }
    });
  }

  private getMoviesByClientEmail(email: string): void {
    this.movieService.getMovieByEmail(email).subscribe({
      next: (movies) => {
        this.movieList = movies;
        this.label = `Movies for ${email}`;
      },
      error: (err) => {
        console.error('Error fetching movies by client email', err);
      }
    });
  }

  private deleteMovieById(id: number): void {
    this.movieService.deleteMovieById(id).subscribe({
      next: () => {
        this.selectedMovie = null;
        this.loadMovies();
      },
      error: (err) => {
        alert('Error deleting movie: ' + err.message);
      }
    });
  }
}
