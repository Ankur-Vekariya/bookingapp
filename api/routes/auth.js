import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello auth route");
});

export default router;
