import * as mongoose from "mongoose";
import { comment } from "./models";

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

  public async saveMovies() {
    // return movie.
  }
}
