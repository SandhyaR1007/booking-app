import express from "express";
import {
  createHotel,
  deleteHotelById,
  getAllHotels,
  updateHotel,
} from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const hotelsRouter = express.Router();

//CREATE
hotelsRouter.post("/addHotel", verifyAdmin, createHotel);

//GET
hotelsRouter.get("/", getAllHotels);

//UPDATE
hotelsRouter.put("/updateHotel/:id", verifyAdmin, updateHotel);

//DELETE
hotelsRouter.delete("/deleteHotel/:id", verifyAdmin, deleteHotelById);

export default hotelsRouter;
