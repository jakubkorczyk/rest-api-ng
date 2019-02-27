import config, { Config } from "./config";
import { Logger } from "./logger";
import { start } from "./restApi";

export interface Dependencies {
  logger: Logger;
  config: Config;
}

export default async function() {
  const { LOG_LEVEL } = config;
  const logger = new Logger(LOG_LEVEL);

  const dependencies: Dependencies = {
    logger,
    config
  };
  try {
    await start(dependencies);
  } catch (err) {
    logger.error(
      `[start] Couldn't start application, following error occured: ${err}`
    );
    process.exit(1);
  }
}
