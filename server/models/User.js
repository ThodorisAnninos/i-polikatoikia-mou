import mongoose from "mongoose";
const { ObjectId } = mongoose.Types;

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            min: 5
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            type:String,
            required:true
        },
        role: {
            type: Number, //0-ιδιοκτήτης |1-ενοικιαστής |2-διαχειριστής πολυκατοικίας |3-χειριστής συστήματος
            default: 0,
            required: true
        },
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        blockOfFlats: {
            type: [ObjectId],
            ref: 'BlockOfFlats',
            default: []
        },
        appartements: {
            type: [ObjectId],
            ref: 'Appartement',
            default:[]
        }
    },
    { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;