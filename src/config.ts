import * as dotenv from "dotenv";
import * as Joi from "joi";
import { Level } from "./logger";

export interface Config {
  DATABASE_CONNECTION_STRING: string;
  LOG_LEVEL: Level;
  PORT: number;
}

dotenv.config();

const configSchema = {
  DATABASE_CONNECTION_STRING: Joi.string().default("mongodb://localhost"),
  LOG_LEVEL: Joi.string()
    .valid(["error", "warn", "info", "debug", "trace"])
    .default("error"),
  PORT: Joi.number()
    .integer()
    .default(8090)
};

const env = Object.keys(configSchema).reduce(
  (cfg, key) => ({ ...cfg, [key]: process.env[key] }),
  {}
);

const validationResult = Joi.validate(env, configSchema, { abortEarly: false });

if (validationResult.error) {
  validationResult.error.details.forEach(({ message }: { message: string }) => {
    console.error(`Configuration error: ${message}.`);
  });
  process.exit(1);
}

const config = <Config>validationResult.value;

export default config;
