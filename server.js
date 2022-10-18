const express = require("express");
const dotenv = require("dotenv");

const { connectMongoose, connectMySql } = require("./config/db");

const tcslRoutes = require("./routes/tcslRoutes");
const equipmentRoutes = require("./routes/equipmentRoutes");
const wjRoutes = require("./routes/wjRoutes");
const testRoutes = require("./routes/testRoutes");
const app = express();

dotenv.config();

const mongo = connectMongoose();
const mySql = connectMySql();

app.use("/tcsl", tcslRoutes);
app.use("/equipments", equipmentRoutes);
app.use("/wj", wjRoutes);
app.use("/test", testRoutes);
app.listen(4000, console.log("server running on 4000"));

app.get("/", (req, res) => {
  res.send("API is running");
});
