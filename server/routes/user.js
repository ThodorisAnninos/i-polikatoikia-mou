import express from "express";
import { getUserByID, deleteUser, getUsers, updateUser } from "../controllers/user.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/all", verifyToken, getUsers);
router.get("/:id", verifyToken, getUserByID);
router.delete("/delete/:id", verifyToken, deleteUser);
router.put("/update/:id", verifyToken, updateUser);


export default router;