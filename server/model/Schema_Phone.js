const mongoose = require("mongoose");
//PHONE

let schemaPHONE = new mongoose.Schema({
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
    },
  ],
  filters: {
    Producent: [String],
  },
});

const ProdPHONE_DB = mongoose.model("ProdPHONE", schemaPHONE);

module.exports = ProdPHONE_DB;
