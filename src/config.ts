import * as dotenv from "dotenv";
import * as Joi from "joi";

export interface Config {
  DATABASE_CONNECTION_STRING: string;
  PORT: number;
}

dotenv.config();

const configSchema = {
  DATABASE_CONNECTION_STRING: Joi.string().default("mongodb://localhost"),
  PORT: Joi.number()
    .integer()
    .default(8090),
};

const env = Object.keys(configSchema).reduce(
  (cfg, key) => ({ ...cfg, [key]: process.env[key] }),
  {}
);

const validationResult = Joi.validate(env, configSchema, { abortEarly: false });

if(validationResult.error) {
  validationResult.error.details.forEach(({ message }: {message: string}) => {
    console.error(`Configuration error: ${message}.`);
  });
  process.exit(1)
}

export default  <Config>validationResult.value;


