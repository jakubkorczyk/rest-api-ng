import * as mongoose from "mongoose";
import { comment, Comment, movie, Movie } from "./models";
import { MovieResponse } from "../movieProvider/MovieProvider";

export class Database {
  private connectionString: string;

  constructor(connectionString: string) {
    this.connectionString = connectionString;
  }

  public async connect() {
    return mongoose.connect(this.connectionString, { useNewUrlParser: true });
  }

  public async saveComment(data: Comment) {
    await comment.create(data);
  }

  public async getComments() {
    return comment.find();
  }

  public async saveOrUpdateMovie(data: MovieResponse) {
    const { imdbID } = data;
    const movieData: Movie = { _id: imdbID, ...data };

    const updated = await movie.findByIdAndUpdate(imdbID, movieData);
    if (!updated) {
      await movie.create(data);
    }
  }

  public async getMovies() {
    return movie.find();
  }
}
