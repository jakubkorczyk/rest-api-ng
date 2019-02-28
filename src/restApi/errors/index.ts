import { Request, Response, NextFunction } from "express";
import * as errors from "./errors";

export function errorHandler(
  err: Error & { code: number },
  _: Request,
  res: Response,
  _1: NextFunction
) {
  // dependencies.logger.error(
  //   `[http]Error during processing http request:\n${err.code}`
  // );

  let responseError = err;
  if (!responseError.code || !Number.isInteger(responseError.code)) {
  console.log(err)

    responseError = errors.internal(err.message);
  }

  res.status(responseError.code).json({ ...responseError });
}