const mongoose = require("mongoose");

//NTB

let schemaNTB = new mongoose.Schema({
  category: String,
  products: [
    {
      id: Number,
      img: String,
      name: String,
      producer: String,
      price: Number,
      category: String,
      opinion: Number,
      spec: [String],
      destiny: String,
    },
  ],
  filters: {
    Producent: [String],
    Przeznaczenie: [String],
  },
});

const ProdNTB_DB = mongoose.model("ProdNTB", schemaNTB);

module.exports = ProdNTB_DB;
