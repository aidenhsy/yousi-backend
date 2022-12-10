const path = require("path");
const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const tcslRoutes = require("./routes/tcslRoutes");
const wjRoutes = require("./routes/wjRoutes");
const testRoutes = require("./routes/testRoutes");
const uploadRoutes = require("./routes/uploadRoutes");

const app = express();

app.use(express.json());

app.use("/tcsl", tcslRoutes);
app.use("/wj", wjRoutes);
app.use("/test", testRoutes);
app.use("/upload", uploadRoutes);

app.use("./uploads", express.static(path.join(__dirname, "./uploads")));

app.listen(4000, console.log("server running on 4000"));
