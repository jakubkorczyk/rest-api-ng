import { getComments } from "./getComments";
import { postComments } from "./postComments";
import { getMovies } from "./getMovies";
import { postMovies } from "./postMovies";
import { decorateHandlers } from "./decorateHandlers";

const rawHandlers = { getComments, postComments, getMovies, postMovies };

export const handlers = decorateHandlers(rawHandlers);
