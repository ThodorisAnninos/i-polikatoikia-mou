import Request from "../models/Request.js";

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
        let requests = await Request.find();

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


