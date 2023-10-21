const mongoose = require("mongoose");

let schemaQueue = new mongoose.Schema([
  {
    id: Number,
    img: String,
    name: String,
    producer: String,
    price: Number,
    newPrice: Number,
    category: String,
    opinion: Number,
    spec: [String],
  },
]);

const ProdQueue = mongoose.model("saleQueue", schemaQueue);

module.exports = ProdQueue;
