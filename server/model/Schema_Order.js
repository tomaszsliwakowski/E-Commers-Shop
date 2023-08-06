const mongoose = require("mongoose");

let schemaOrder = new mongoose.Schema({
  Products: [
    {
      category: String,
      count: Number,
      id: Number,
      img: String,
      name: String,
      opinion: Number,
      price: Number,
      producer: String,
    },
  ],
  Data: {
    name: String,
    lastName: String,
    address: String,
    city: String,
    postCode: String,
    phone: String,
    email: String,
    payment: {
      price: Number,
      method: String,
    },
    delivery: {
      price: Number,
      method: String,
    },
  },
});

const Order_DB = mongoose.model("OrderDB", schemaOrder);

module.exports = Order_DB;
