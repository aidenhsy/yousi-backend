const connectMongoose = async () => {
  const mongoose = require("mongoose");
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI_LOCAL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

const connectMySql = async () => {
  const mysql = require("mysql");
  try {
    const conn = await mysql.createConnection({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: "yousi",
    });
    return conn;
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

module.exports = { connectMongoose, connectMySql };
