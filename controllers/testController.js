const axios = require("axios");
const { connectMySql } = require("../config/db");
const dotenv = require("dotenv");
dotenv.config();

const getTable = async (req, res) => {
  try {
    res.send("success yo");
  } catch (error) {
    res.send(error);
  }
};

module.exports = { getTable };
