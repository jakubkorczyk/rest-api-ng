import config, { Config } from "./config";
import { Logger } from "./logger";
import { start } from "./restApi";
import { Database } from "./database";
import { MovieProvider } from "./movieProvider";

export interface Dependencies {
  logger: Logger;
  config: Config;
  database: Database;
  movieProvider: MovieProvider;
}

export default async function() {
  const {
    LOG_LEVEL,
    DATABASE_CONNECTION_STRING,
    MOVIE_API_KEY,
    MOVIE_API_URL
  } = config;

  const logger = new Logger(LOG_LEVEL);
  const database = new Database(DATABASE_CONNECTION_STRING);
  const movieProvider = new MovieProvider(MOVIE_API_URL, MOVIE_API_KEY);

  try {
    await database.connect();
    logger.info("[start] Successfully connected with databse.");
    const dependencies: Dependencies = {
      logger,
      config,
      database,
      movieProvider
    };

    await start(dependencies);
  } catch (err) {
    logger.error(
      `[start] Couldn't start application, following error occured: ${err}`
    );
    process.exit(1);
  }
}
