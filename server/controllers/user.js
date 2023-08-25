import User from "../models/User.js";

export const getUserByID = async (req, res) => {
    try {
        const userID = req.params.id
        let user = await User.findById(userID);
        if (!user) return res.status(400).json({error : "User Not Found!"});

        delete user.password;
        res.status(201).json(user);
    } catch(err){
        res.status(500).json({error: err.message});
    }
}

export const deleteUser = async(req, res)=>{
    try{
        const id=req.params.id;
        await User.findOneAndDelete({_id: id})
        res.status(201).json({success : "User Deleted!"});
    } catch(err){
        res.status(500).json({error: err.message});
    }
}

export const updateUser = async(req, res)=> {
    try{
        console.log(req.body)

        const id=req.params.id;
        const {
            username,
            email,
            password,
            confirmPassword,
            firstName,
            lastName,
            role,
            blockOfFlats,
            appartements
        } = req.body;


        const newUser = {
            username,
            email,
            password,
            role,
            firstName,
            lastName,
            blockOfFlats,
            appartements
        };


        const updatedUser = await User.findOneAndUpdate({_id:id}, newUser);
        
        delete updatedUser.password;
        res.status(201).json(updatedUser);
    } catch(err){
        res.status(500).json({error: err.message});
    } 
}


export const getUsers = async(req, res)=>{
    try {
        let users = await User.find();
        users = users.map((user)=>{
            delete user.password;
            return user;
        })
        res.status(201).json(users);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}