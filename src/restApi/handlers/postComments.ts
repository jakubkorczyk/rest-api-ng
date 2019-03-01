import { Request, Response, NextFunction } from "express";
import { internal } from "../errors/errors";

export async function postComments(
  { body, dependencies }: Request,
  res: Response,
  _: NextFunction
) {
  try {
    const { database } = dependencies;
    const { comments } = body;
    const promises = comments.map(async (comment: Comment) =>
      database.saveComment(comment)
    );
    await Promise.all(promises);
  } catch (err) {
    throw internal(`Error while saving comments: "${err}`);
  }
  res.contentType("application/json").json({
    ...body,
    message: "Saved succesfully"
  });
}
