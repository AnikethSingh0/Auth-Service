const userRepository = require("../repository/user-repository.js");
const { JWT_KEY } = require("../config/index.js");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt')


class userService {
  constructor() {
    this.userRepository = new userRepository();
  }
  async create(data) {
    try {
      const user = await this.userRepository.create(data);
      return user;
    } catch (err) {
      console.log("Error in service layer:", err);
      throw err;
    }
  }

  createToken(user) {
    try {
      const response = jwt.sign(user, JWT_KEY, { expiresIn: "1h" });
      return response;
    } catch (err) {
      console.log("Error while creating token", err);
      throw err;
    }
  }
  verifyToken(token) {
    try {
      const response = jwt.sign(token, JWT_KEY);
      return response;
    } catch (err) {
      console.log("Error while verifing token", err);
      throw err;
    }
  }

  comparePassword(userInputPassword,encryptedPassword){
    try {
      const response = bcrypt.compareSync(userInputPassword,encryptedPassword);
      return response;
    } catch (err) {
      console.log("the comparePassword is not working")
      throw err;
    }
  }
}

module.exports = userService;
