import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
      isadmin: req.body.isadmin,
    });

    await newUser.save();
    res.status(200).send("user created");
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(404, "user not available"));
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, "wrong password or username"));

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isadmin },
      "bookingapp"
    );
    const { password, isadmin, ...otherDetails } = user._doc;
    res
      .cookie("access_token", token, {
        httponly: true,
      })
      .status(200)
      .send({ ...otherDetails });
  } catch (error) {
    next(error);
  }
};
