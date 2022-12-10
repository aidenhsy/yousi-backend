const express = require("express");

const {
  getTable,
  createNewUser,
  getAllUsers,
} = require("../controllers/testController.js");

const router = express.Router();

router.route("/table").get(getTable);
router.route("/user").post(createNewUser).get(getAllUsers);

module.exports = router;
