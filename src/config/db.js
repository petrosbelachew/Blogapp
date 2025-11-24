import mongoose from "mongoose";
import { app } from "../app.js";
import { PORT, url } from "./index.js";

export function dbConnection() {
  mongoose
    .connect(url)
    .then(() => {
      console.log("✅ MongoDB connected successfully!");

      // Start the Express server only after the DB connection is successful
      const server = app.listen(PORT, () => {
        console.log(`Server running and listening on port ${PORT}`);
      });

      // Add robust error handling for the server listening process itself
      server.on("error", (err) => {
        console.error("❌ Server Listen Error:", err.message);
        process.exit(1);
      });
    })
    .catch((err) => {
      console.error("❌ MongoDB connection error:", err.message);
      // Exit process if DB connection fails
      process.exit(1);
    });
}
