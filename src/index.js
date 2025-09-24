const express = require("express");
const { PORT, JWT_KEY ,DB_SYNC} = require("./config/index");
const { json } = require("sequelize");
const apiRoutes = require("./routes/index");
const UserRepository = require("./repository/user-repository");
const UserService = require("./service/user-service");
const userService = require("./service/user-service");
const jwt = require("jsonwebtoken");
const { sequelize } = require("./models");

const app = express();

const startServer = async () => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/api", apiRoutes);
  if(DB_SYNC){
    sequelize.sync({alter:true})
  }
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
};

startServer();
