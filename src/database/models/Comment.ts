import { Document, Schema, model } from "mongoose";
import { createionDateMiddleware } from "./middlewares";

export interface Comment extends Document {
  user: string;
  message: string;
  createdAt?: Date;
}

export const commentSchema: Schema = new Schema({
  user: String,
  message: String,
  createdAt: Date
});

commentSchema.pre("save", createionDateMiddleware);

export const comment = model<Comment>("Comment", commentSchema);
