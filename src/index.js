const express = require('express')
const {PORT} = require('./config/index')
const app = express();


const startServer=()=>{
    app.listen(PORT,()=>{
        console.log("server is starting")
    })
}
startServer()