import Hotels from "../models/Hotel";
import Rooms from "../models/Room";

const createRoom = async (req, res, next) => {
  const newRoom = new Rooms(req.body);
  try {
    const savedRoom = await newRoom.save();
    await Hotels.findByIdAndUpdate(req.params.hotelId, {
      $push: { rooms: savedRoom._id },
    });
    res.status(201).json({ message: "Room Created Successfully", savedRoom });
  } catch (error) {
    next(error);
  }
};

const updateRoom = async (req, res, next) => {
  try {
    const updatedRoom = await Hotels.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json({ message: "Room Updated", updatedRoom });
  } catch (error) {
    next(error);
  }
};

const getRooms = async (req, res, next) => {
  try {
    const rooms = await Rooms.find();
    res.status(200).json({ message: "Rooms found", rooms });
  } catch (error) {
    next(error);
  }
};

const deleteRoom = async (req, res, next) => {
  try {
    const room = await Rooms.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Room deleted", room });
  } catch (error) {
    next(error);
  }
};

export { createRoom, updateRoom, getRooms, deleteRoom };
