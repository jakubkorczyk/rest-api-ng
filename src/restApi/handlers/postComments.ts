import { Request, Response, NextFunction } from "express";
import { internal } from "../errors/errors";

export async function postComments(
  { body, dependencies }: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { database } = dependencies;
    const { comments } = body;
    const promises = comments.map(async (comment: Comment) =>
      database.saveComment(comment)
    );
    await Promise.all(promises);
  } catch (err) {
    next(internal(`[DB] Error while saving comment: "${err}`));
  }
  res.contentType("application/json").json({
    ...body,
    message: "Saved succesfully"
  });
}
