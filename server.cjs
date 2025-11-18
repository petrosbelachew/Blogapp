const env = require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const PORT = process.env.port || 3000;

//Connect to MongoDB
mongoose
  .connect(process.env.mongourl)
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.log(err));

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
