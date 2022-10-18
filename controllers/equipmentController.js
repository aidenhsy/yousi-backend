const axios = require("axios");
const Equipment = require("../models/equipmentModel.js");

const equipmentInfo = async (req, res) => {
  try {
    console.log("this was hit");
    const equipment = await Equipment.find({});
    res.json(equipment);
  } catch (error) {
    res.send(error);
  }
};

module.exports = { equipmentInfo };
