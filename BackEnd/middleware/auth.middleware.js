const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const authMiddleware = asyncHandler(async (req, res, next) => {
  const token = await req.headers.authorization;
  console.log(token)

  if (token) {
    jwt.verify(token.split(" ")[1], process.env.JWT_SECRET, function (err, decoded) {
      if (err) {
        return res.status(500).send({
          type: "error",
          message: "Unauthorised Access ",
          error: err.JsonWebTokenError,
        });
      } else {
        return next();
      }
    });
  } else {
    return res.status(500).send({
      type: "error",
      message: "Unauthorised Access ",
      error: "Token Not Found",
    });
  }
});

module.exports = { authMiddleware };
