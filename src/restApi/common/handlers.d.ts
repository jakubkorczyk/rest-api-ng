/**
 * Enriched Express handler types done via declaration merging
 * {@link https://www.typescriptlang.org/docs/handbook/declaration-merging.html}
 * cause we need to inject services into each handler.
 */

import { Dependencies } from "../../start";

declare global {
  declare namespace Express {
    export interface Request {
      data: any;
      dependencies: Dependencies;
    }
  }
}