const express = require("express");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
};
const app = express();
app.use(cors(corsOptions));

const PORT = 5000;

app.use(morgan("tiny"));

app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hi");
});
app.use("/", require("./router"));

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} port`);
});
