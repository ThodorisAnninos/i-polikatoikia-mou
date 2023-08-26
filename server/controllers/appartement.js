import Appartement from "../models/Appartement.js";

export const geAppartementByID = async (req, res) => {
    try {
        const appartementID = req.params.id
        let appartement = await Appartement.findById(appartementID);
        if (!appartement) return res.status(400).json({error : "Appartement Not Found!"});

        res.status(201).json(appartement);
    } catch(err){
        res.status(500).json({error: err.message});
    }
}

export const getAppartements = async(req, res)=>{
    try {
        const appartements = await Appartement.find();

        res.status(201).json(appartements);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

export const deleteAppartement = async(req, res)=>{
    try{
        const id=req.params.id;
        await Appartement.findOneAndDelete({_id: id})
        res.status(201).json({success : "Appartement Deleted!"});
    } catch(err){
        res.status(500).json({error: err.message});
    }
}

export const updateAppartement = async(req, res)=> {
    try{

        const id=req.params.id;
        const {
            label,
            floor,
            blockOfFlatsId,
            rent,
            ownerId,
            renterId
        } = req.body;


        const newAppartement = new Appartement({
            label,
            floor,
            blockOfFlatsId,
            rent,
            ownerId,
            renterId
        });


        const updatedAppartement = await Appartement.findOneAndUpdate({_id:id}, newAppartement);
        
        res.status(201).json(updatedAppartement);
    } catch(err){
        res.status(500).json({error: err.message});
    } 
}

export const addAppartement = async (req, res) => {
    try {
        const {
            label,
            floor,
            blockOfFlatsId,
            rent,
            ownerId,
            renterId
        } = req.body;

        const newAppartement = new Appartement({
            label,
            floor,
            blockOfFlatsId,
            rent,
            ownerId,
            renterId
        });

        const savedAppartement = await newAppartement.save();

        res.status(201).json(savedAppartement);
    } catch(err){
        res.status(500).json({error: err.message});
    }
}


