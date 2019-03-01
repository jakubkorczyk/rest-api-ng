import * as mongoose from "mongoose";
import { comment, movie } from "./models";

export class Database {
  private connectionString: string;

  constructor(connectionString: string) {
    this.connectionString = connectionString;
  }

  public async connect() {
    return mongoose.connect(this.connectionString, { useNewUrlParser: true });
  }

  public async saveComment(data: any) {
    await comment.create(data);
  }

  public async getComments() {
    return comment.find();
  }

  public async saveOrUpdateMovie(data: any) {
    const { imdbID } = data;
    data._id = imdbID;
    const updated = await movie.findByIdAndUpdate(imdbID, data);
    if (!updated) {
      await movie.create(data);
    }
  }

  public async getMovies() {
    return movie.find();
  }
}
