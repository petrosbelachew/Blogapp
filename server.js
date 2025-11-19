import mongoose from "mongoose";
import "dotenv/config";
import express from "express";
import itemRoutes from "./model/routes/item-routes.js";

const app = express();
const PORT = process.env.port || 3000;
app.use(express.json());

app.use("/api/items", itemRoutes); // All routes in itemRoutes will be prefixed with /api/items
//Connect to MongoDB
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
