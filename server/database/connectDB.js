const mongoose = require("mongoose");
const mongo_url =
  "mongodb+srv://admin:admin123@shop.hst096m.mongodb.net/Shop?retryWrites=true&w=majorit";
// This information should be in the env file

const connectDB = async () => {
  try {
    const con = await mongoose.connect(mongo_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected : ${con.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
