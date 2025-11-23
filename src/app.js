import express from "express";
import blogRoutes from "./routes/blog-routes.js";
import writerRoutes from "./routes/writer-routes.js";

export const app = express();

export function appview() {
  app.use(express.json());
  //import itemRoutes from "./model/routes/item-routes.js";

  // import {blogRoutes,writerRoutes} from "./src/routes"
  app.use("/api/blog", blogRoutes); // All routes in itemRoutes will be prefixed with /api/items
  app.use("/api/writer", writerRoutes); // All routes in itemRoutes will be prefixed with /api/items
}
