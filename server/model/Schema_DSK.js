const mongoose = require("mongoose");
//DSK

let schemaDSK = new mongoose.Schema({
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
const ProdDSK_DB = mongoose.model("ProdDSK", schemaDSK);

module.exports = ProdDSK_DB;
