import express from "express";
import {getPostByID, getPosts, updatePost, deletePost, addPost} from "../controllers/post.js"
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/all", verifyToken, getPosts);
router.get("/:id", verifyToken, getPostByID);
router.post("/new", verifyToken, addPost);
router.delete("/delete/:id", verifyToken, deletePost);
router.put("/update/:id", verifyToken, updatePost);


export default router;