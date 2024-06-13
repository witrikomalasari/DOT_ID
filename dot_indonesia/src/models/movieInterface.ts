export interface Movie {
  adult?: boolean;
  backdrop_path?: string;
  genre_ids?: number[];
  id: number;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  release_date?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
}

export interface MovieFavorite extends Movie {
  favorite: boolean;
}

export interface Video {
  iso_639_1?: string;
  iso_3166_1?: string;
  name?: string;
  key?: string;
  site?: string;
  size?: number;
  type?: string;
  official?: boolean;
  published_at?: string;
  id?: string;
}

export interface MovieState {
  movies: MovieFavorite[];
  detailMovie: Movie | {};
  videoMovies: Video[];
}

export const initialMovieState: MovieState = {
  movies: [],
  detailMovie: {},
  videoMovies: [],
};
