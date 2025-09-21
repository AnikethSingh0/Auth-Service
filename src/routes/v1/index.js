const express = require("express");
const UserControllers = require("../../controllers/user-controllers");

const router = express.Router();

router.post("/signup", UserControllers.create);

module.exports = router;
