const user = require('../models/user.js');
const  userService = require('../service/user-service.js')

const UserService = new userService();
const create = async(req,res)=>{
    try {
        const user = await UserService.create(req.body)
        res.status(201).json({
            success : true ,
            message : "Successful created a new user" ,
            data : user ,
            err : {}
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message : "something went wrong in the controllers",
            success : false,
            err : err,
            data : {}
        })
    }
}
const signIn = async(req,res)=>{
    try {
        const user = await UserService.signIn(req.body.email, req.body.password);
        res.status(200).json({
            success : true ,
            message : "Successful signin" ,
            data : user ,
            err : {}
        })
    } catch (err) {
        console.log("error in controllers")
        res.status(500).json({
            message : "something went wrong in the controllers",
            success : false,
            err : err,
            data : {}
        })
        
    }
}
module.exports = {
    create,
    signIn
}