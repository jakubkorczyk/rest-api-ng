import * as express from "express";
import { postComments, getComments } from "../handlers";

const router = express.Router();

router.get("/", (_, res) =>
  res.send({ message: "Welcome in another movie API ;)" })
);
router.post("/movies");
router.get("/movies");
router.post("/comments", postComments);
router.get("/comments", getComments);

export default router;
