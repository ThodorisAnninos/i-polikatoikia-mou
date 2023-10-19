import jwt from "jsonwebtoken";
import User from "../models/User.js"

export const roleRestriction = (role) => {
    return (req, res, next) => {
        next();
    };
} 