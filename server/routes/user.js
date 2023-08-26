import express from "express";
import { getUserByID, deleteUser, getUsers, updateUser } from "../controllers/user.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/all", getUsers);
router.get("/:id", getUserByID);
router.delete("/delete/:id", deleteUser);
router.put("/update/:id", updateUser);


export default router;