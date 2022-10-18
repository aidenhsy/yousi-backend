const axios = require("axios");

const dotenv = require("dotenv");
dotenv.config();

const data = [
  {
    itemName: "test item 1",
    qty: 2,
  },
  {
    itemName: "test item 2",
    qty: 5,
  },
];

const getData = async (req, res) => {
  try {
    res.json(data);
  } catch (error) {
    res.send(error);
  }
};

module.exports = { getData };
