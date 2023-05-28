const mongoose = require("mongoose");
//All

let schemaAll = new mongoose.Schema({
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
});

const ProdAll_DB = mongoose.model("ProdAll", schemaAll);

module.exports = ProdAll_DB;
