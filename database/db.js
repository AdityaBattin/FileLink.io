require("dotenv").config();
const mongoose = require('mongoose');

const connectDB = () => {
    // Database Connection
    mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DataBase Connected...🤩");
    })
    .catch((error) => {
      console.error("DataBase Connection Error..😓 : " + error);
    });
}

module.exports = connectDB;