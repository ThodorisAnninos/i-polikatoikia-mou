import Post from "../models/Post.js";

export const getPostByID = async (req, res) => {
    try {
        const postID = req.params.id
        let post = await Post.findById(postID);
        if (!post) return res.status(400).json({ error: "Post Not Found!" });

        res.status(201).json(post);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export const getPosts = async (req, res) => {
    try {
        let posts = await Post.find().populate('authorId', 'username');

        res.status(201).json(posts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export const deletePost = async (req, res) => {
    try {
        const id = req.params.id;
        await Post.findOneAndDelete({ _id: id })
        res.status(201).json({ success: "Post Deleted!" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export const updatePost = async (req, res) => {
    try {

        const id = req.params.id;
        const {
            title,
            description,
            authorId,
            blockOfFlatsId,
            category,
            viewed
        } = req.body;


        const newPost = new Post({
            title,
            description,
            authorId,
            blockOfFlatsId,
            category,
            viewed
        });


        const updatedPost = await Post.findOneAndUpdate({ _id: id }, newPost);

        res.status(201).json(updatedPost);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export const addPost = async (req, res) => {
    try {
        const {
            title,
            description,
            authorId,
            blockOfFlatsId,
            category,
            viewed
        } = req.body;

        const newPost = new Post({
            title,
            description,
            authorId,
            blockOfFlatsId,
            category,
            viewed
        });

        const savedPost = await newPost.save();

        res.status(201).json(savedPost);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


