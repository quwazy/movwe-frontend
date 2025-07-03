export interface Movie {
  id: number;
  title: string;
  description: string;
  yearOfRelease: string;
  trailerUrl: string;
  type: string;
  genre: string;
}

export interface AddMovie {
  title: string | null;
  description: string | null;
  yearOfRelease: string | null;
  trailerUrl: string | null;
  type: string | null;
  genre: string | null;
}
