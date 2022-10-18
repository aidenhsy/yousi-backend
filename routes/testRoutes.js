const express = require("express");

const { getTable } = require("../controllers/testController.js");

const router = express.Router();

router.route("/table").get(getTable);

module.exports = router;
