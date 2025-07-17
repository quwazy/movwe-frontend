export interface MovieDto {
    userId: number;
    userEmail: string;
    movieId: number;
    title: string;
    description: string;
    yearOfRelease: string;
    trailerUrl: string;
    type: string;
    genre: string;
}

export interface UpdateMovieDto {
    id: number;
    title: string;
    description: string;
    yearOfRelease: string;
    trailerUrl: string;
    type: string;
    genre: string;
}
