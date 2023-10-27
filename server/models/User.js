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
        roles: {
            type: [{
                appartementId: {
                    type: ObjectId,
                    unique: true,
                    ref: 'BlockOfFlats'
                },
                role: {
                    type: Number, 
                    required: true
                }
            }],
            default:[],
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
            type: [{
                appartementId: {
                    type: ObjectId,
                    ref: 'Appartement'
                },
                nickname: {
                    type: String
                }
            }],
            default:[]
        }
    },
    { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;