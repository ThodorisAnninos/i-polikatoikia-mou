import express from "express";
import {geAppartementByID, getAppartements, updateAppartement, deleteAppartement, addAppartement} from "../controllers/appartement.js"
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/all", verifyToken, getAppartements);
router.get("/:id", verifyToken, geAppartementByID);
router.post("/new", verifyToken, addAppartement);
router.delete("/delete/:id", verifyToken, deleteAppartement);
router.put("/update/:id", verifyToken, updateAppartement);


export default router;