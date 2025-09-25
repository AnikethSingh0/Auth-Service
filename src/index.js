const express = require("express");
const { PORT, JWT_KEY ,DB_SYNC} = require("./config/index");
const { json } = require("sequelize");
const apiRoutes = require("./routes/index");
const UserRepository = require("./repository/user-repository");
const UserService = require("./service/user-service");
const userService = require("./service/user-service");
const jwt = require("jsonwebtoken");
const { sequelize } = require("./models");
const userRepository = require("./repository/user-repository");
const {User,Role} = require("./models/index");

const app = express();

const startServer = async () => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/api", apiRoutes);
  const res1 = await User.findByPk(3)
  const res2 = await Role.findByPk(1)
  res1.addRole(res2)
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
};

startServer();
