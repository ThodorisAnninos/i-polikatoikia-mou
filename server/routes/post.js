import express from "express";
import {getPostByID, getPosts, updatePost, deletePost, addPost} from "../controllers/post.js"
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/all", getPosts);
router.get("/:id", getPostByID);
router.post("/new", addPost);
router.delete("/delete/:id", deletePost);
router.put("/update/:id", updatePost);


export default router;