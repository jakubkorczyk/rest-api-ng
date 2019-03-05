import { Document, Schema, model } from "mongoose";
import { createionDateMiddleware } from "./middlewares";

export interface Comment {
  user: string;
  message: string;
  createdAt?: Date;
}
interface CommentDoccument extends Comment, Document {}

export const commentSchema: Schema = new Schema({
  user: String,
  message: String,
  createdAt: Date
});

commentSchema.pre("save", createionDateMiddleware);

export const comment = model<CommentDoccument>("Comment", commentSchema);
