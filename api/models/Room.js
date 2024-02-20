import mongoose from "mongoose";

const roomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    desc: String,
    roomNumbers: [{ number: Number, unavailableDates: [Date] }],
  },
  { timestamps: true }
);

const Rooms = mongoose.Model("Rooms", roomSchema);
export default Rooms;
