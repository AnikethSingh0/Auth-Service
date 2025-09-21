const { User } = require('../models/index')

class userRepository{
    async create(data){
        try {
            const user = await User.create(data);
            return user;
        } catch (err) {
            console.log("error in repository layer")
            throw {err};
        }
    }

    async destory(userId){
        try {
            const user = await User.destory({
                where:{
                    id:userId
                }
            })
            return user;
        } catch (err) {
            console.log("error in repository layer")
            throw {err};
        }
    }
}

module.exports = userRepository