const express = require('express')
const {PORT} = require('./config/index');
const { json } = require('sequelize');
const apiRoutes = require('./routes/index');

const app = express();

const startServer = () => {
    app.use(express.json());
    app.use(express.urlencoded({extended:true}));
    
    app.use('/api', apiRoutes);
    
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    });
}

startServer();