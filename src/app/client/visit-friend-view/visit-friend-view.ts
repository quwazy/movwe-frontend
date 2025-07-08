import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../tools/services/movie-service';
import { NavBar } from '../nav-bar-view/nav-bar';
import { CommonModule } from '@angular/common';
import { Movie } from '../tools/models/movie.interface';
import { EmbedMoviePipePipe } from '../tools/pipes/embed-movie-pipe-pipe';

@Component({
  selector: 'app-visit-friend-view',
  imports: [CommonModule, NavBar, EmbedMoviePipePipe],
  templateUrl: './visit-friend-view.html',
  styleUrl: './visit-friend-view.css'
})
export class VisitFriendView implements OnInit {
  protected movies: Array<Movie> = [];
  protected selectedMovie: Movie | null = null;
  protected username: string = '';

  constructor(private movieService: MovieService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get('username') || '';

    this.movieService.getAllFriendsMovies(this.username).subscribe({
      next: (data) => {
        this.movies = data;
      },
      error: (err) => { 
        console.error('Error loading movies:', err);
      }
    });
  }

  selectMovie(movie: Movie): void {
    this.selectedMovie = movie;
  }
}
