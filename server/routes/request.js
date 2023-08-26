import express from "express";
import {getRequestByID, getRequests, updateRequest, deleteRequest, addRequest} from "../controllers/request.js"
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/all", getRequests);
router.get("/:id", getRequestByID);
router.post("/new", addRequest);
router.delete("/delete/:id", deleteRequest);
router.put("/update/:id", updateRequest);


export default router;