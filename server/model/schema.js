const mongoose = require("mongoose");

let schema = new mongoose.Schema({});

const Userdb = mongoose.model("ProdDB", schema);

module.exports = Userdb;
