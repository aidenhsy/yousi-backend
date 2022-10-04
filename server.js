const express = require("express");
const dotenv = require("dotenv");

const tcslRoutes = require("./routes/tcslRoutes.js");

const app = express();

dotenv.config();

app.use("/tcsl", tcslRoutes);

app.listen(3001);

app.get("/", (req, res) => {
  res.send("API is running");
});
