const express = require("express");
const router = express.Router();

const { equipmentInfo } = require("../controllers/equipmentController.js");

router.route("/info").post(equipmentInfo);

module.exports = router;
