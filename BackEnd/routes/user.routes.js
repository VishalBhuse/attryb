const express = require("express");
const {
  createUser,
  allUserInfo,
  loginUser,
} = require("../controller/user.controller");
const userRouter = express.Router();

userRouter.post("/register", createUser);
userRouter.get("/getalluser", allUserInfo);
userRouter.post("/login", loginUser);

module.exports = userRouter;
