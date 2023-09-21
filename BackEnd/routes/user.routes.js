const express = require("express");
const {
  createUser,
  allUserInfo,
  loginUser,
  deleteUser,
} = require("../controller/user.controller");
const userRouter = express.Router();

userRouter.get("/", allUserInfo);
userRouter.post("/register", createUser);
userRouter.post("/login", loginUser);
userRouter.delete("/:id", deleteUser);

module.exports = userRouter;
