const mongoose = require("mongoose");

let schemaUser = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  orderData: {
    name: String,
    lastName: String,
    address: String,
    city: String,
    postCode: String,
    phone: String,
  },
  authentication: {
    password: { type: String, required: true, select: false },
    salt: { type: String, select: false },
    sessionToken: { type: String, select: false },
  },
});

const User_DB = mongoose.model("User", schemaUser);

module.exports = User_DB;
