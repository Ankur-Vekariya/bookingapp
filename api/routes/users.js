import express from "express";
import {
  deleteUser,
  getAllUser,
  getUser,
  updateUser,
} from "../controllers/user.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/check", verifyToken, (req, res, next) => {
  res.send("hello user loged in");
});
//update
router.put("/:id", updateUser);
//delete
router.delete("/:id", deleteUser);
//get
router.get("/:id", getUser);
//get all

router.get("/", getAllUser);
export default router;
