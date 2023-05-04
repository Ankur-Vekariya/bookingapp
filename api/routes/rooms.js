import express from "express";
import Hotel from "../models/Hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";
import {
  createRoom,
  deleteRoom,
  getAllRoom,
  getRoom,
  updateRoom,
} from "../controllers/room.js";
const router = express.Router();

//create
router.post("/:hotelid", verifyAdmin, createRoom);
//update
router.put("/:id", verifyAdmin, updateRoom);
//delete
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);
//get
router.get("/:id", getRoom);
//get all

router.get("/", getAllRoom);

export default router;
