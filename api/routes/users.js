import express from "express";
import {
  deleteUserById,
  getAllUsers,
  getUserById,
  updateUser,
} from "../controllers/user.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const usersRouter = express.Router();

//GET ALL
usersRouter.get("/", verifyAdmin, getAllUsers);

//GET
usersRouter.get("/:id", verifyUser, getUserById);

//UPDATE
usersRouter.put("/:id", verifyUser, updateUser);
//DELETE
usersRouter.delete("/:id", verifyUser, deleteUserById);

export default usersRouter;
