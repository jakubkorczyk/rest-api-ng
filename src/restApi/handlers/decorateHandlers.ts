import { Handler } from "express";

export interface HandlersList {
  [index: string]: Handler;
}

function decorator(handler: Handler): Handler {
  return async function tryHandler(req, res, next) {
    try {
      await handler(req, res, next);
    } catch (error) {
      next(error);
    }
  };
}

export function decorateHandlers(handlers: HandlersList): HandlersList{
  return Object.keys(handlers).reduce(
    (decorated, handlerName) => ({
      ...decorated,
      [handlerName]: decorator(handlers[handlerName])
    }),
    {}
  );
}
