import express from "express";

const roomsRouter = express.Router();

roomsRouter.get("/", (req, res) => {
  res.send("hello from rooms");
});

export default roomsRouter;
