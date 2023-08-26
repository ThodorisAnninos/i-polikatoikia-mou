import jwt from "jsonwebtoken";
import User from "../models/User.js"

export const roleRestriction = async(req, res, next) => {
    try{
        const action = req.action;
        
        const actions = {
            owner: [],
            renter: [],
            blockOfFlatsAdmin: [],
            systemAdmin: []
        };

        let token = req.header("Authorization");
        let decoded = jwt.decode(token);
        const user = await User.find({_id:decoded.id});
        const role = user.role;



        switch(role){
            case 1:
                if(!actions.owner.includes(action)) return res.status(403).json({error: "Access Denied!"});
            case 2:
                if(!actions.renter.includes(action)) return res.status(403).json({error: "Access Denied!"});
            case 3:
                if(!actions.blockOfFlatsAdmin.includes(action)) return res.status(403).json({error: "Access Denied!"});
            case 4:
                if(!actions.systemAdmin.includes(action)) return res.status(403).json({error: "Access Denied!"});
        }


        // req.blockOfFlats = user.blockOfFlats;

        next();


    } catch (err){
        res.status(500).json({error: err.message});
    }
}