import config from "./config"
import { Logger } from "./logger"

export default function() {
  const { LOG_LEVEL } = config;
  const logger = new Logger(LOG_LEVEL);
  const dependencies = {
    logger
  }
  
  logger.info(config);
}
