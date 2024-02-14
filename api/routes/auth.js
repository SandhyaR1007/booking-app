import express from "express";

const authRouter = express.Router();

authRouter.get("/", (req, res) => {
  res.send("hello from authrouter");
});

export default authRouter;
