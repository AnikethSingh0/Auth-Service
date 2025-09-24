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
  //  const dada = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3R1c2VyM0BleGFtcGxlLmNvbSIsImlkIjozLCJpYXQiOjE3NTg2NzU4NzksImV4cCI6MTc1ODY3OTQ3OX0.0W8lrc0aNZHui_MZDWl3ywFYNFNXI_p3fHuliPdgRiA";

  //  var decoded = jwt.verify(dada, JWT_KEY);
  //  console.log(decoded);
  //console.log(dada)

  app.use("/api", apiRoutes);

  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
};

startServer();
