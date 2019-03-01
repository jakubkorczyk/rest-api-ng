import * as request from "supertest";
import { createApp } from "./createApp";
import { Logger } from "../logger";
import { Database } from "../database";

Date.now = jest.fn(() => 1551340763836);

const config = {
  DATABASE_CONNECTION_STRING: "localhost",
  LOG_LEVEL: "error",
  PORT: 8090
};

const logger = new Logger(config.LOG_LEVEL);
const database = new Database(config.DATABASE_CONNECTION_STRING);
const dependencies = {
  logger,
  config,
  database
};

const app = createApp(dependencies);

describe("GET /", () => {
  test("returns basic API message on root path", () => {
    return request(app)
      .get("/")
      .expect(200)
      .expect({
        message: "Welcome in another movie API ;)"
      });
  });
});

describe("GET wrong path", () => {
  test("returns 404 on wrong path", () => {
    return request(app)
      .get("/wrong")
      .expect(404);
  });
});

describe("Path /comments", () => {
  test("returns success on comment save in database", done => {
    return request(app)
      .post("/comments")
      .send({ comments: [{ user: "user", message: "message" }] })
      .expect(200)
      .expect({
        comments: [{ user: "user", message: "message" }],
        message: "Saved succesfully"
      })
      .end(done);
  });

  test("returns list of comment saved in database", done => {
    return request(app)
      .get("/comments")
      .expect(200)
      .expect({
        comments: [{ user: "user", message: "message" }]
      })
      .end(done);
  });
});

describe("Path /movies", () => {
  test("returns success on movie save in database", done => {
    return request(app)
      .post("/movies/?asfodnf=aaaa")
      .expect(200)
      .end(done);
  });

  test("returns 400 error when no parameters are sent", done => {
    return request(app)
      .post("/movies/")
      .expect(400)
      .end(done);
  });
});
