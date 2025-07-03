import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MovieService } from '../services/movie-service';
import { AddMovie } from '../models/movie.interface';
import { NavBar } from '../nav-bar/nav-bar';

@Component({
  selector: 'app-add-movie-view',
  imports: [NavBar, FormsModule],
  templateUrl: './add-movie-view.html',
  styleUrl: './add-movie-view.css'
})
export class AddMovieView {
  title: string = "";
  description: string = "";
  yearOfRelease: string = "";
  trailerUrl: string = "";
  type: string = "MOVIE";
  genre: string = "ACTION";

  constructor(private movieService: MovieService) {}

  addMovie() {
    const movie: AddMovie = {
      title: this.title,
      description: this.description,
      yearOfRelease: this.yearOfRelease,
      trailerUrl: this.trailerUrl,
      type: this.type,
      genre: this.genre
    };

    this.movieService.addMovie(movie).subscribe({
      next: (response) => {
        alert('Movie added successfully!');
        this.resetForm();
      },
      error: (error) => {
        alert('Error adding movie. Please try again.');
      }
    });
  }

  private resetForm() {
    this.title = '';
    this.description = '';
    this.yearOfRelease = '';
    this.trailerUrl = '';
    this.type = 'MOVIE';
    this.genre = 'ACTION';
  }
}
