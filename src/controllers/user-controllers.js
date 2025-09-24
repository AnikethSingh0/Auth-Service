const user = require("../models/user.js");
const userService = require("../service/user-service.js");

const UserService = new userService();
const create = async (req, res) => {
  try {
    const user = await UserService.create(req.body);
    res.status(201).json({
      success: true,
      message: "Successful created a new user",
      data: user,
      err: {},
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "something went wrong in the controllers",
      success: false,
      err: err,
      data: {},
    });
  }
};
const signIn = async (req, res) => {
  try {
    const user = await UserService.signIn(req.body.email, req.body.password);
    res.status(200).json({
      success: true,
      message: "Successful signin",
      data: user,
      err: {},
    });
  } catch (err) {
    console.log("error in controllers");
    res.status(500).json({
      message: "something went wrong in the controllers",
      success: false,
      err: err,
      data: {},
    });
  }
};

const isAuthorised = async (req, res) => {
  try {
    const token = req.headers["authorization"];
    const response = await UserService.isAuthorised(token);
    return res.status(200).json({
      success: true,
      message: "Authorization Successful",
      data: response,
      err: {},
    });
  } catch (err) {
    console.log("Error in authorization controller:", err);
    return res.status(401).json({
      message: "Authorization failed",
      success: false,
      err: err.message || "Invalid token",
      data: {},
    });
  }
};
module.exports = {
  create,
  signIn,
  isAuthorised
};
