import Jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookie.access_token;
  console.log("token",token);
  if (!token) {
    return next(createError(401, "you are not authenticated"));
  }

  Jwt.verify(token, "bookingapp", (err, user) => {
    if (err) return next(createError(403, "token is not valid"));

    req.user = user;
    next();
  });
};
