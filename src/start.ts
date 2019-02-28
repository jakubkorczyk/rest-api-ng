import config, { Config } from "./config";
import { Logger } from "./logger";
import { start } from "./restApi";
import { Database } from "./database";

export interface Dependencies {
  logger: Logger;
  config: Config;
  database: Database;
}

export default async function() {
  const { LOG_LEVEL, DATABASE_CONNECTION_STRING } = config;
  const logger = new Logger(LOG_LEVEL);
  const database = new Database(DATABASE_CONNECTION_STRING);

  try {
    await database.connect();
    logger.info("[start] Successfully connected with databse.");
    const dependencies: Dependencies = {
      logger,
      config,
      database
    };

    await start(dependencies);
  } catch (err) {
    logger.error(
      `[start] Couldn't start application, following error occured: ${err}`
    );
    process.exit(1);
  }
}
