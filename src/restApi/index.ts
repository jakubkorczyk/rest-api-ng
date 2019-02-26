import { createApp } from "./createApp";
import { Dependencies } from "../start";

export async function start(dependencies: Dependencies) {
  const { logger } = dependencies;
  const { PORT } = dependencies.config;
  const app = createApp(dependencies);
  return new Promise((resolve, reject) => {
    app.listen(PORT, (err: Error) => {
      if (err) {
        reject(err)
      } else {
        logger.info(`[http] Application is listening on port: ${PORT}`);
        resolve();
      }
    });
  });
}
