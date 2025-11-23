import mongoose from "mongoose";
import { app } from "../app.js";
import { PORT, url } from "./index.js";

export function dbConnection() {
  mongoose
    .connect(url)
    .then(() => {
      console.log("✅ Connected to MongoDB");
      app.listen(PORT, () => {
        console.log(`🚀 Servr is running on http://localhost:${PORT}`);
      });
    })
    .catch((error) => {
      console.error("❌ MongoDB connection error:", error);
    });
}
