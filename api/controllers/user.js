import Users from "../models/User.js";

const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await Users.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({ message: "User Updated", updatedUser });
  } catch (error) {
    next(error);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const users = await Users.find();
    res.status(200).json({ message: "Users found", users });
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const user = await Users.findById(req.params.id);
    res.status(200).json({ message: "User found", user });
  } catch (error) {
    next(error);
  }
};
const deleteUserById = async (req, res, next) => {
  try {
    const user = await Users.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "User deleted", user });
  } catch (error) {
    next(error);
  }
};

export { updateUser, getAllUsers, getUserById, deleteUserById };
