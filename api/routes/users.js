import express from "express";
import {
  deleteUser,
  getAllUser,
  getUser,
  updateUser,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/check", verifyToken, (req, res, next) => {
  res.send("hello user logged in");
});

router.get("/checkuser/:id", verifyUser, (req, res, next) => {
  res.send("hello user logged in to delete hotel");
});
router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
  res.send("hello admin logged in to delete all hotel");
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
