import * as express from "express";
import { json } from "body-parser";
import { Dependencies } from "../start";
import router from "./router";
import { errorHandler } from "./errors";

function attachDependencies(dependencies: Dependencies): express.Handler {
  return function attachDependenciesToRequest(req, _, next) {
    req.dependencies = dependencies;
    next();
  };
}

export function createApp(dependencies: Dependencies): express.Application {
  const app = express();
  app.use(json());
  app.use(attachDependencies(dependencies));
  app.use("/", router);
  app.use(errorHandler);

  return app;
}
