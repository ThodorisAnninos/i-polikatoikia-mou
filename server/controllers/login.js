import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const login = async (req, res) => {
    try {
        const {
            username,
            password
        } = req.body;

        const user = await User.findOne({username : username});
        if (!user) return res.status(400).json({error: "User doesn't exists"});

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({error: "Password doesn't match"});

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
        delete user.password;
        res.status(200).json({token, user});

    } catch(err){
        res.status(500).json({error: err.message});
    }
}