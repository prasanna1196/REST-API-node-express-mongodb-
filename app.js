const express = require("express");
const app = express();
const mongoose = require("mongoose");

// Middleware for parsing json
app.use(express.json());

// Import Rotes
const postRoute = require("./routes/posts");

app.use("/posts", postRoute);

// Connect to db (Atlas)
// Enter your mongodb Atlas user name and password in their respective field below
const dbURI = "mongodb://localhost:27017/local";
mongoose.connect(
  dbURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("connected to db");
  }
);

// Create Routes
app.get("/", (req, res) => {
  console.log("reached / route");
  res.send("Home");
});

// Listening to server
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
