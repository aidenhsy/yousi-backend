const User = require("../models/testModel");

const getTable = async (req, res) => {
  try {
    res.send("success yo");
  } catch (error) {
    res.send(error);
  }
};

const createNewUser = async (req, res, next) => {
  try {
    let { name, address } = req.body;
    let user = new User(name, address);
    user = await user.save();
    res.status(201).json({ message: "User created" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.status(200).json({ users });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { getTable, createNewUser, getAllUsers };
