const express = require("express");
const morgan = require("morgan");
const bodyparser = require("body-parser");

const app = express();

const PORT = 5000;

app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", (rq, res) => {
  res.send("Hi");
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} port`);
});
