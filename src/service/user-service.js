const userRepository = require("../repository/user-repository.js");

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
}

module.exports = userService;
