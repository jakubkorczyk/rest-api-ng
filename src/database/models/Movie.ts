import { Document, Schema, model } from "mongoose";
import { createionDateMiddleware } from "./middlewares";
import { MovieResponse } from "../../movieProvider";

export interface Movie extends Document, MovieResponse {}

export const movieSchema: Schema = new Schema({
  _id: String,
  Title: String,
  Year: String,
  Rated: String,
  Released: String,
  Runtime: String,
  Genre: String,
  Director: String,
  Writer: String,
  Actors: String,
  Plot: String,
  Language: String,
  Country: String,
  Awards: String,
  Poster: String,
  Ratings: Array,
  Metascore: String,
  imdbRating: String,
  imdbVotes: String,
  imdbID: String,
  Type: String,
  totalSeasons: Number
});

movieSchema.pre("save", createionDateMiddleware);

export const movie = model<Movie>("Movie", movieSchema);
