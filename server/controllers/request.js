import Request from "../models/Request.js";
import User from "../models/User.js";

export const getRequestByID = async (req, res) => {
    try {
        const requestID = req.params.id
        let request = await Request.findById(requestID);
        if (!request) return res.status(400).json({error : "Request Not Found!"});

        res.status(201).json(request);
    } catch(err){
        res.status(500).json({error: err.message});
    }
}

export const getRequests = async(req, res)=>{
    try {
        
        let requests = await Request.find().populate('userId', 'username').populate('receiver', 'username');

        res.status(201).json(requests);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

export const deleteRequest = async(req, res)=>{
    try{
        const id=req.params.id;
        await Request.findOneAndDelete({_id: id})
        res.status(201).json({success : "Request Deleted!"});
    } catch(err){
        res.status(500).json({error: err.message});
    }
}

export const updateRequest = async(req, res)=> {
    try{

        const id=req.params.id;
        const {
            title,
            description,
            category,
            userId,
            blockOfFlatsId,
            // ΦΩΤΟΓΡΑΦΙΕΣ
            location,
            receiver,
            progress,
            comments,
            likes
        } = req.body;


        const newRequest = new Request({
            title,
            description,
            category,
            userId,
            blockOfFlatsId,
            // ΦΩΤΟΓΡΑΦΙΕΣ
            location,
            receiver,
            progress,
            comments,
            likes
        });


        const updatedRequest = await User.findOneAndUpdate({_id:id}, newRequest);
        
        res.status(201).json(updatedRequest);
    } catch(err){
        res.status(500).json({error: err.message});
    } 
}

export const addRequest = async (req, res) => {
    try {
        const {
            title,
            description,
            category,
            userId,
            blockOfFlatsId,
            // ΦΩΤΟΓΡΑΦΙΕΣ
            location,
            receiver,
            progress,
            comments,
            likes
        } = req.body;

        const newRequest = new Request({
            title,
            description,
            category,
            userId,
            blockOfFlatsId,
            // ΦΩΤΟΓΡΑΦΙΕΣ
            location,
            receiver,
            progress,
            comments,
            likes
        });

        const savedRequest = await newRequest.save();

        res.status(201).json(savedRequest);
    } catch(err){
        res.status(500).json({error: err.message});
    }
}

export const addComment = async (req, res) => {
    try{
        const requestId = req.params.requestId;
        const userId = req.body.userId;
        const newComment = {
            date: Date.now(),
            userId: userId,
            content: req.body.comment
        };

        const user = await User.findById(userId);

        if (user){

            let request = await Request.findById(requestID);

            request.comments.push(newComment);
            // let oldComments = request.comments;
            // let comments = [...oldComments, newComment];
            // request.comments = comments;
            const updatedRequest = await request.save();

            res.status(201).json(updatedRequest);
        } else {
            res.status(404).json({error: "User Not Found!"});
        }

    } catch(err){
        res.status(500).json({error: err.message});
    }
}

export const removeComment = async (req, res) => {
    // δεν έχω id, μήπως να γίνει με πιο έξυπνο τρόπο!
}

export const like = async (req, res) => {
    try{
        const requestId = req.params.requestId;
        const userId = req.body.userId;
        let request = await Request.findById(requestId);
        if (!request.likes.includes(userId)){
            request.likes.push(userId);
            const updatedRequest = await request.save();
            res.status(201).json(updatedRequest);
        } else {
            res.status(409).send("You already liked this request!");
        }

    } catch(err){
        console.log(err);
        res.status(500).json({error: err.message});
    }
}

export const dislike = async (req, res) => {
    try{
        const requestId = req.params.requestId;
        const userId = req.body.userId;
        let request = await Request.findById(requestId);
        if (!request.likes.includes(userId)){
            request.likes = request.likes.filter((id) => id !== userId);
            const updatedRequest = await request.save();
            res.status(201).json(updatedRequest);
        } else {
            res.status(409).send("You haven't liked this request!");
        }

    } catch(err){
        console.log(err);
        res.status(500).json({error: err.message});
    }
}