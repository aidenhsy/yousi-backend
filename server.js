const express = require("express");
const dotenv = require("dotenv");

const { connectDB } = require("./config/db.js");
const tcslRoutes = require("./routes/tcslRoutes.js");

const app = express();

dotenv.config();

connectDB();

app.use("/tcsl", tcslRoutes);

app.listen(4000, console.log("server running on 4000"));

app.get("/", (req, res) => {
  res.send("API is running");
});
