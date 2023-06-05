const mongoose = require("mongoose");

let schemaOpinion = new mongoose.Schema({
  uid: {
    type: String,
    require: true,
  },
  email: String,
  name: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: true,
  },
  date: {
    type: String,
    require: true,
  },
  prod_id: {
    type: String,
    require: true,
  },
  opinionId: Number,
});

const Add_Opinion = mongoose.model("Add_Opinion", schemaOpinion);

module.exports = Add_Opinion;
