import { Request, Response, NextFunction } from "express";
import { internal } from "../errors/errors";

export async function getMovies(
  { dependencies }: Request,
  res: Response,
  _: NextFunction
) {
  let movies;
  try {
    const { database } = dependencies;
    movies = await database.getMovies();
  } catch (err) {
    throw internal(`[DB] Error while saving comment: "${err}`);
  }
  res.contentType("application/json").json({
    movies
  });
}
