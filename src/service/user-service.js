const userRepository = require("../repository/user-repository.js");
const { JWT_KEY } = require("../config/index.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

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

  async isAuthorised(token) {
    try {
      const tokenVerifyResponse = this.verifyToken(token);
      if (!tokenVerifyResponse) {
        throw new Error("Token verification on authorization failed");
      }

      const response = await this.userRepository.get(tokenVerifyResponse.id);
      if (!response) {
        throw new Error("The token corresponding email does not exist");
      }

      return response.id;
    } catch (error) {
      console.log("Error in service layer:", error);
      throw error;
    }
  }

  async signIn(userEmail, userPassword) {
    try {
      // step1 -> User enter email pass we fetch whole attribute of that email
      const getData = await this.userRepository.getByEmail(userEmail);
      const comparePasswordResult = await this.comparePassword(
        userPassword,
        getData.password
      );
      if (!comparePasswordResult) {
        console.log("password does not match");
        throw new Error("Incorrect Password");
      }
      const genrateToken = this.createToken({
        email: getData.email,
        id: getData.id,
      });
      return genrateToken;
    } catch (err) {
      console.log("Error while signing", err);
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
      const response = jwt.verify(token, JWT_KEY);
      return response;
    } catch (err) {
      console.log("Error while verifing token", err);
      throw err;
    }
  }

  comparePassword(userInputPassword, encryptedPassword) {
    try {
      const response = bcrypt.compareSync(userInputPassword, encryptedPassword);
      return response;
    } catch (err) {
      console.log("the comparePassword is not working");
      throw err;
    }
  }

  async isAdmin(userId){
    try {
      const userDetails = await this.userRepository.isAdmin(userId);
      return userDetails;
    } catch (err) {
      console.log("Error in service layer", err);
      throw err;
    }
  }
}

module.exports = userService;
