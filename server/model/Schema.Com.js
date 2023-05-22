const mongoose = require("mongoose");
//Components

let schemaPCCOM = new mongoose.Schema({
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
      components: String,
    },
  ],
  filters: {
    Producent: [String],
    Komponenty: [String],
  },
});

const ProdPCCOM_DB = mongoose.model("ProdPCCOM", schemaPCCOM);

module.exports = ProdPCCOM_DB;
