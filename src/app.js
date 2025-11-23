import express from "express";
import blogRoutes from "./routes/blog-routes.js";
import writerRoutes from "./routes/writer-routes.js";

import {
  errorHandler,
  notFound,
  healthCheck,
} from "../src/middlewares/index.js";

export const app = express();

export function appview() {
  app.use(express.json());

  // Health Check Route (a separate route, not middleware)
  app.get("/health", healthCheck);
  //import itemRoutes from "./model/routes/item-routes.js";

  // import {blogRoutes,writerRoutes} from "./src/routes"
  app.use("/api/blog", blogRoutes); // All routes in itemRoutes will be prefixed with /api/items
  app.use("/api/writer", writerRoutes); // All routes in itemRoutes will be prefixed with /api/items

  // ======================================
  // ERROR HANDLING MIDDLEWARE (CRITICAL ORDER)
  // ======================================

  // 1. 404 Not Found Handler: Catches requests that don't match any route above
  app.use(notFound);

  // 2. Global Error Handler: Must be the last piece of middleware
  app.use(errorHandler);
}
