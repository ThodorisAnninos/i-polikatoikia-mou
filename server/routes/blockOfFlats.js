import express from "express";
import {getBlockOfFlatsByID, getBlocksOfFlats, updateBlockOfFlats, deleteBlockOfFlats, addBlockOfFlats} from "../controllers/blockOfFlats.js"
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/all", getBlocksOfFlats);
router.get("/:id", getBlockOfFlatsByID);
router.post("/new", addBlockOfFlats);
router.delete("/delete/:id", deleteBlockOfFlats);
router.put("/update/:id", updateBlockOfFlats);


export default router;