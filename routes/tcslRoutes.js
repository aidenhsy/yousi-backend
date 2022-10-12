const express = require("express");

const {
  getToken,
  getDailySales1,
} = require("../controllers/tcslController.js");

const router = express.Router();

router.route("/token").post(getToken);
router.route("/test").post(getDailySales1);

module.exports = router;
