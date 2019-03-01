import { Request, Response, NextFunction } from "express";
import { badRequest, internal } from "../errors/errors";
import * as Url from "url";

export async function postMovies(
  { url, dependencies }: Request,
  res: Response,
  _: NextFunction
) {
  const query = Url.parse(url).query;
  if (!query) {
    throw badRequest("[http]No parameters sent.");
  }
  const { movieProvider, database } = dependencies;

  try {
    const movie = await movieProvider.getMovie(query);
    await database.saveOrUpdateMovie(movie);
  } catch (err) {
    throw internal(`Error while saving movie: ${err}.`);
  }

  res.contentType("application/json").json({
    query,
    message: "Saved succesfully"
  });
}
