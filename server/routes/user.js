import express from "express";
import { getUserByID, deleteUser, getUsers, updateUser } from "../controllers/user.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/user/:id", getUserByID);
router.get("/users", getUsers);
router.delete("/user/delete/:id", deleteUser);
router.put("/user/update/:id", updateUser);


export default router;