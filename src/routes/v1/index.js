const express = require("express");
const UserControllers = require("../../controllers/user-controllers");
const {AuthRequestMiddelware} = require("../../middelware/index")

const router = express.Router();


router.post("/signup", AuthRequestMiddelware,UserControllers.create);
router.post('/signin', AuthRequestMiddelware,UserControllers.signIn)

module.exports = router;
