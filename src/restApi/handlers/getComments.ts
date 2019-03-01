import { Request, Response, NextFunction } from "express";
import { internal } from "../errors/errors";

export async function getComments(
  { dependencies }: Request,
  res: Response,
  _: NextFunction
) {
  let comments;
  try {
    const { database } = dependencies;
    comments = await database.getComments();
  } catch (err) {
    throw internal(`Error while getting comments: "${err}`);
  }
  res.contentType("application/json").json({
    comments
  });
}
