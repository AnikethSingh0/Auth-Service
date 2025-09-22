const express = require("express");
const { PORT , JWT_KEY} = require("./config/index");
const { json } = require("sequelize");
const apiRoutes = require("./routes/index");
const UserRepository = require("./repository/user-repository");
const UserService = require("./service/user-service");
const userService = require("./service/user-service");
const jwt = require('jsonwebtoken')


const app = express();

const startServer = async () => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

//   const response = new UserService();
//   const dada = await response.createToken({ email: "dada@gmail.com", id: 3 });

//   var decoded = jwt.verify(dada, JWT_KEY);
//   console.log(decoded);
  //console.log(dada)

  app.use("/api", apiRoutes);

  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
};

startServer();
