import express from "express";
import {getRequestByID, getRequests, updateRequest, deleteRequest, addRequest} from "../controllers/request.js"
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/all", verifyToken, getRequests);
router.get("/:id", verifyToken, getRequestByID);
router.post("/new", verifyToken, addRequest);
router.delete("/delete/:id", verifyToken, deleteRequest);
router.put("/update/:id", verifyToken, updateRequest);


export default router;