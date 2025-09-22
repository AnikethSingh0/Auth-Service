const { User } = require("../models/index");

class userRepository {
  async create(data) {
    try {
      const user = await User.create(data);
      return user;
    } catch (err) {
      console.log("Error in repository layer:", err);
      throw err;
    }
  }

  async destroy(userId) {
    try {
      const user = await User.destroy({
        where: {
          id: userId,
        }
      });
      return user;
    } catch (err) {
      console.log("error in repository layer");
      throw { err };
    }
  }

  async get(userId) {
    try {
      const user = await User.findByPk(userId, {
        //we use attributes because we do not want to expose even encrypted pass to frontend
        attributes: ["email", "id"],
      });
      return user;
    } catch (err) {
      console.log("error in repository layer");
      throw { err };
    }
  }

  async getByEmail(userEmail){
    try {
        const user = await User.findOne({
            where:{
                email:userEmail
            }
        })
        return user;
    } catch (err) {
        console.log("error in repository layer")
        throw {err}
    }
  }
}

module.exports = userRepository;
