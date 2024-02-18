import express from "express";
import {
  createHotel,
  deleteHotelById,
  getAllHotels,
  updateHotel,
} from "../controllers/hotel.js";

const hotelsRouter = express.Router();

hotelsRouter.post("/addHotel", createHotel);

hotelsRouter.put("/updateHotel/:id", updateHotel);

hotelsRouter.get("/", getAllHotels);

hotelsRouter.delete("/deleteHotel/:id", deleteHotelById);

export default hotelsRouter;
