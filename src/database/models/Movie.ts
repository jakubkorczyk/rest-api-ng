import { Document, Schema, model } from "mongoose";
import { createionDateMiddleware } from "./middlewares";

export interface Movie extends Document {
  user: string;
  message: string;
  createdAt?: Date;
}

export const movieSchema: Schema = new Schema({
  user: String,
  message: String,
  createdAt: Date
});

movieSchema.pre("save", createionDateMiddleware);

export const movie = model<Movie>("Movie", movieSchema);
