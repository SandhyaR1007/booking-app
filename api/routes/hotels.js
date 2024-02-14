import express from "express";

const hotelsRouter = express.Router();

hotelsRouter.get("/", (req, res) => {
  res.send("hello from hotels");
});

export default hotelsRouter;
