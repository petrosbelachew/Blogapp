const express = require("express");
const app = express();
const MongodbUrl = require("env");
const PORT = process.env.port || 3000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

//Connect to MongoDB
// mongoose
//   .connect(process.env.)
//   .then(() => console.log("MongoDB connected!"))
//   .catch((err) => console.log(err));
