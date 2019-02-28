import { Request, Response, NextFunction } from "express";
import { internal } from "../errors/errors";

export async function getComments(
  { dependencies }: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { database } = dependencies;
    const comments = await database.getComments();
    res.contentType("application/json").json({
      comments
    });
  } catch (err) {
    return next(internal(`[DB] Error while saving comment: "${err}`));
  }

}
