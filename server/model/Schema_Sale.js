const mongoose = require("mongoose");

let schemaQueue = new mongoose.Schema([
  {
    id: Number,
    img: String,
    name: String,
    producer: String,
    price: Number,
    newPrice: Number,
    queue: Number,
    category: String,
    opinion: Number,
    spec: [String],
  },
]);
const ProdQueue = mongoose.model("ProdQueue", schemaQueue);

module.exports = ProdQueue;
