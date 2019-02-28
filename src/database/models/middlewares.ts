import { HookNextFunction } from "mongoose";

export function createionDateMiddleware(next: HookNextFunction) {
  if (!this.createdAt) {
    this.createdAt = new Date();
  }
  next();
}
