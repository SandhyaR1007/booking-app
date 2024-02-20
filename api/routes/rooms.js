import express from "express";
import {
  createRoom,
  deleteRoom,
  getRooms,
  updateRoom,
} from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const roomsRouter = express.Router();

//CREATE
roomsRouter.post("/addRoom/:hotelId", verifyAdmin, createRoom);
//GET
roomsRouter.get("/", getRooms);
//UPDATE
roomsRouter.put("/updateRoom/:id", verifyAdmin, updateRoom);
//DELETE
roomsRouter.delete("/deleteRoom/:id/:hotelId", verifyAdmin, deleteRoom);

export default roomsRouter;
