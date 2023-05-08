import express from "express";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getAllHotel,
  getHotel,
  updateHotel,
} from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router(); 

//create
router.post("/", verifyAdmin, createHotel);
//update
router.put("/find/:id", verifyAdmin, updateHotel);
//delete
router.delete("/find/:id", verifyAdmin, deleteHotel);
//get
router.get("/find/:id", getHotel);
//get all
router.get("/", getAllHotel);
// get hotel by city
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);

export default router;
