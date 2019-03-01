import * as express from "express";
import { handlers } from "../handlers";

const router = express.Router();

router.get("/", (_, res) =>
  res.send({ message: "Welcome in another movie API ;)" })
);
router.get("/movies", handlers.getMovies);
router.post("/movies", handlers.postMovies);
router.get("/comments", handlers.getComments);
router.post("/comments", handlers.postComments);

export default router;
