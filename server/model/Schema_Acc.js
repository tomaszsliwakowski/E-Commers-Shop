const mongoose = require("mongoose");
//Accesories

let schemaACC = new mongoose.Schema({
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
      accesories: String,
    },
  ],
  filters: {
    Producent: [String],
    Akcesoria: [String],
  },
});

const ProdACC_DB = mongoose.model("ProdACC", schemaACC);

module.exports = ProdACC_DB;
