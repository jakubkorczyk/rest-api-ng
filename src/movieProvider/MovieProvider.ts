import * as http from "http";

interface Ratings {
  Source: string;
  Value: string;
}

export interface MovieResponse {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Ratings[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: number;
  imdbID: string;
  Type: number;
  totalSeasons: number;
  Response: string;
  Error?: string;
}

export class MovieProvider {
  private url: string;
  private key: string;

  constructor(url: string, key: string) {
    this.url = url;
    this.key = key;
  }

  public async getMovie(params: string): Promise<MovieResponse> {
    return new Promise((resolve, reject) => {
      http
        .get(`${this.url}/?apikey=${this.key}&${params}`, resp => {
          let data = "";
          resp.on("data", chunk => {
            data += chunk;
          });
          resp.on("end", () => {
            const movie = <MovieResponse>JSON.parse(data);
            if (movie.Response === "True") {
              resolve(movie);
            }
            reject(movie.Error);
          });
        })
        .on("error", err => {
          reject(err);
        });
    });
  }
}
