import * as request from "supertest";
import { createApp } from "./createApp";
import { Logger } from "../logger";

const LOG_LEVEL = "error";
const logger = new Logger("error");

const dependencies = {
  logger,
  config: {
    DATABASE_CONNECTION_STRING: "localhost",
    LOG_LEVEL: "error",
    PORT: 8090,
  }
}

const app = createApp(dependencies);

describe("GET /", () => {
  test("returns basic API message on root path", () => {

    return request(app)
      .get("/")
      .expect(200)
      .expect({
        message: "Welcome in another movie API ;)"
      })
      
  });
});