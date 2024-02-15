import express from "express";
import Hotels from "../models/Hotel.js";

const hotelsRouter = express.Router();

hotelsRouter.post("/addHotel", async (req, res, next) => {
  const newHotel = new Hotels(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(201).json({ message: "Hotel Saved Successfully", savedHotel });
  } catch (error) {
    next(error);
  }
});
hotelsRouter.put("/updateHotel/:id", async (req, res, next) => {
  try {
    const updatedHotel = await Hotels.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json({ message: "Hotel Updated", updatedHotel });
  } catch (error) {
    next(error);
  }
});

hotelsRouter.get("/", async (req, res, next) => {
  try {
    const hotels = await Hotels.find();
    res.status(200).json({ message: "Hotels found", hotels });
  } catch (error) {
    next(error);
  }
});

hotelsRouter.delete("/deleteHotel/:id", async (req, res, next) => {
  try {
    const hotel = await Hotels.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Hotel deleted", hotel });
  } catch (error) {
    next(error);
  }
});

export default hotelsRouter;
