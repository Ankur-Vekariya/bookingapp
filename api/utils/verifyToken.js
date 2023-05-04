import Jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  console.log("token", token);
  if (!token) {
    return next(createError(401, "you are not authenticated"));
  }

  Jwt.verify(token, "bookingapp", (err, user) => {
    if (err) return next(createError(403, "token is not valid"));

    req.user = user;
    next();
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id == req.params.id || req.user.isAdmin) {
      next();
    } else {
      next(createError(403, "you are not authorized"));
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    console.log("req.user.isAdmin", req.user.isAdmin);
    if (req.user.isAdmin) {
      next();
    } else {
      next(createError(403, "you are not admin"));
    }
  });
};
