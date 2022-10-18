const express = require("express");

const { getData } = require("../controllers/wjController.js");

const router = express.Router();

router.route("/test").post(getData);

module.exports = router;
