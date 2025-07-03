import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../services/movie-service';
import { Movie } from '../models/movie.interface';
import { NavBar } from '../nav-bar/nav-bar';
import { EmbedMoviePipePipe } from '../pipes/embed-movie-pipe-pipe';

@Component({
  selector: 'app-movie-view',
  imports: [CommonModule, NavBar, EmbedMoviePipePipe],
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

  selectMovie(movie: Movie): void {
      this.selectedMovie = movie;
    }

  confirmDelete(): void {
    const confirmed = confirm('Are you sure you want to delete this movie?');
    if (confirmed && this.selectedMovie) {
      this.movieService.deleteMovie(this.selectedMovie.id).subscribe({
        next: () => {
          alert('Movie deleted successfully!');
          this.movies = this.movies.filter(movie => movie.id !== this.selectedMovie?.id);
          this.selectedMovie = null;
        },
        error: () => {
          alert('Error deleting movie. Please try again.');
        }
      });
    }
  }
}
