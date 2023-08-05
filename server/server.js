const express = require("express");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const cors = require("cors");
const connectDB = require("./database/connectDB");

const corsOptions = {
  origin: "https://tomaszsliwakowski.github.io" | "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
};

const app = express();

app.use(cors(corsOptions));

const PORT = 10000; // This information should be in the env file

app.use(morgan("tiny"));

connectDB();

app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Server On");
});
app.use("/", require("./router"));

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} port`);
});
