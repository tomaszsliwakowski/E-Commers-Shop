const express = require("express");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const cors = require("cors");
const connectDB = require("./database/connectDB");
const dotenv = require("dotenv");
const ProdNTB_DB = require("./model/schema_NTB");
const ProdPHONE_DB = require("./model/Schema_Phone");
const ProdDSK_DB = require("./model/Schema_DSK");
const ProdPCCOM_DB = require("./model/Schema.Com");
const ProdACC_DB = require("./model/Schema_Acc");

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
};

const app = express();

app.use(cors(corsOptions));

dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 1000;

app.use(morgan("tiny"));

connectDB();

const data = ProdACC_DB({
  category: "Akcesoria",
  products: [],
  filters: {
    Producent: [],
    Akcesoria: [],
  },
});

app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hi");
});
app.use("/", require("./router"));

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} port`);
});
