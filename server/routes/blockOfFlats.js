import express from "express";
import {getBlockOfFlatsByID, getBlocksOfFlats, updateBlockOfFlats, deleteBlockOfFlats, addBlockOfFlats} from "../controllers/blockOfFlats.js"
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/all", verifyToken, getBlocksOfFlats);
router.get("/:id", verifyToken, getBlockOfFlatsByID);
router.post("/new", verifyToken, addBlockOfFlats);
router.delete("/delete/:id", verifyToken, deleteBlockOfFlats);
router.put("/update/:id", verifyToken, updateBlockOfFlats);


export default router;