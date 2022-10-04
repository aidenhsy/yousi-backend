const axios = require("axios");
const express = require("express");

const { getDailySales } = require("../controllers/tcslController.js");

const router = express.Router();

router.route("/storesales").get(getDailySales);

module.exports = router;
