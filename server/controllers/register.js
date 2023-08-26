import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const register = async (req, res) => {
    try {
        // λογικά θα ελέγχει αν είναι μοναδικό το email και το username αφού είναι unique στην βάση.
        let {
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

        if (password === confirmPassword){
            const salt = await bcrypt.genSalt();
            const passwordHash = await bcrypt.hash(password, salt);
            password = passwordHash;
            
        } else {
            return res.status(500).json({error : "Wrong password"});
        }

        const newUser = new User({
            username,
            email,
            password,
            role,
            firstName,
            lastName,
            blockOfFlats,
            appartements
        });

        const savedUser = await newUser.save();
        delete savedUser.password;
        res.status(201).json(savedUser);
    } catch(err){
        res.status(500).json({error: err.message});
    }
}