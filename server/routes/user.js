import express from "express";
import { getUserByID, deleteUser } from "../controllers/user";
import { verifyToken } from "../middleware/verifyToken";

const router = express.Router();

router.get("/user/:id", verifyToken, getUserByID);
router.post("/user/:id", verifyToken, getUserByID);
router.delete("/user/delete/:id", verifyToken, deleteUser);
router.put("/user/update/:id", verifyToken, deleteUser);


export default router;