import bcrypt from "bcryptjs";

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
    bcrypt.compare(req.body.password, user.password, function (err, match) {
      if (match) {
        res.status(200).json({ message: "Login Successful" });
      } else {
        next(createError(401, "Unauthorized"));
      }
    });
  } catch (error) {
    next(error);
  }
};

export { register, login };
