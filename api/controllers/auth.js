import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import Users from "../models/User.js";
import { createError } from "../utils/error.js";

const register = async (req, res, next) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);
  try {
    const newUser = new Users({
      username: req.body.username,
      email: req.body.email,
      password: hash,
      isAdmin: req.body?.isAdmin ?? false,
    });
    await newUser.save();
    res.status(201).json({ message: "User Created Successfully" });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const user = await Users.findOne({ username: req.body.username });
    if (!user) return next(createError(404, "User Not Found"));
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordCorrect) return next(createError(401, "Unauthorized"));

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT
    );
    const { password, isAdmin, ...userDetails } = user._doc;
    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ message: "Login Successful", userDetails });
  } catch (error) {
    next(error);
  }
};

export { register, login };
