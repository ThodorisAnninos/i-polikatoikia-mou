import BlockOfFlats from "../models/BlockOfFlats.js"

export const getBlockOfFlatsByID = async (req, res) => {
    try {
        const blockOfFlatsID = req.params.id
        let blockOfFlats = await BlockOfFlats.findById(blockOfFlatsID);
        if (!blockOfFlats) return res.status(400).json({error : "Block of Flats Not Found!"});

        res.status(201).json(blockOfFlats);
    } catch(err){
        res.status(500).json({error: err.message});
    }
}

export const getBlocksOfFlats = async(req, res)=>{
    try {
        let blockOfFlats = await BlockOfFlats.find();

        res.status(201).json(blockOfFlats);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

export const deleteBlockOfFlats = async(req, res)=>{
    try{
        const id=req.params.id;
        await BlockOfFlats.findOneAndDelete({_id: id})
        res.status(201).json({success : "Block of Flats Deleted!"});
    } catch(err){
        res.status(500).json({error: err.message});
    }
}

export const updateBlockOfFlats = async(req, res)=> {
    try{

        const id=req.params.id;
        const {
            name,
            address,
            usersId,
            adminId,
            appartementsId
        } = req.body;


        const newBlockOfFlats = new BlockOfFlats({
            name,
            address,
            usersId,
            adminId,
            appartementsId
        });


        const updatedBlockOfFlats = await BlockOfFlats.findOneAndUpdate({_id:id}, newBlockOfFlats);
        
        res.status(201).json(updatedBlockOfFlats);
    } catch(err){
        res.status(500).json({error: err.message});
    } 
}

export const addBlockOfFlats = async (req, res) => {
    try {
        const {
            name,
            address,
            usersId,
            adminId,
            appartementsId
        } = req.body;

        const newBlockOfFlats = new Post({
            name,
            address,
            usersId,
            adminId,
            appartementsId
        });

        const savedBlockOfFlats = await newBlockOfFlats.save();

        res.status(201).json(savedBlockOfFlats);
    } catch(err){
        res.status(500).json({error: err.message});
    }
}


