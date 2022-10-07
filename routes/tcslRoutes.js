const axios = require("axios");
const express = require("express");

const { getToken } = require("../controllers/tcslController.js");

const router = express.Router();

router.route("/token").post(getToken);

module.exports = router;
