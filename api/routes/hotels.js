import express from "express";
import Hotels from "../models/Hotel.js";

const hotelsRouter = express.Router();

hotelsRouter.post("/addHotel", async (req, res) => {
  const newHotel = new Hotels(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(201).json({ message: "Hotel Saved Successfully", savedHotel });
  } catch (error) {
    res.status(500).json(error);
  }
});
hotelsRouter.put("/updateHotel/:id", async (req, res) => {
  try {
    const updatedHotel = await Hotels.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json({ message: "Hotel Updated", updatedHotel });
  } catch (error) {
    res.status(500).json(error);
  }
});

hotelsRouter.get("/", async (req, res) => {
  try {
    const hotels = await Hotels.find();
    res.status(200).json({ message: "Hotels found", hotels });
  } catch (error) {
    res.status(500).json({ error });
  }
});

hotelsRouter.delete("/deleteHotel/:id", async (req, res) => {
  try {
    const hotel = await Hotels.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Hotel deleted", hotel });
  } catch (error) {
    res.status(500).json({ error });
  }
});

export default hotelsRouter;
