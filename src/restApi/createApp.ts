import * as express from "express";
import { Dependencies } from "../start";

function attachDependencies(dependencies: Dependencies): express.Handler {
  return function attachDependenciesToRequest(req, _, next) {
    req.dependencies = dependencies;
    next();
  };
}

export function createApp(dependencies: Dependencies): express.Application {
  const app = express();
  app.use(attachDependencies(dependencies));
  app.get("/", (_, res) =>
    res.send({ message: "Welcome in another movie API ;)" })
  );

  return app;
}
