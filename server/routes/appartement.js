import express from "express";
import {geAppartementByID, getAppartements, updateAppartement, deleteAppartement, addAppartement} from "../controllers/appartement.js"
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/all", getAppartements);
router.get("/:id", geAppartementByID);
router.post("/new", addAppartement);
router.delete("/delete/:id", deleteAppartement);
router.put("/update/:id", updateAppartement);


export default router;