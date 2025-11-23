import mongoose from "mongoose";
import "dotenv/config";
import express from "express";

const app = express();

app.use(express.json());

//import itemRoutes from "./model/routes/item-routes.js";
import blogRoutes from "./model/routes/blog-routes.js";

app.use("/api/blog", blogRoutes); // All routes in itemRoutes will be prefixed with /api/items
//Connect to MongoDB
const PORT = process.env.port || 3000;
mongoose
  .connect(process.env.mongourl)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`🚀 Servr is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ MongoDB connection error:", error);
  });
