const mongoose = require("mongoose");
const URI = `mongodb+srv://admin:admin123@shop.hst096m.mongodb.net/Shop?retryWrites=true`;
// This information should be in the env file

const connectDB = async () => {
  try {
    const con = await mongoose.connect(URI, {
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
