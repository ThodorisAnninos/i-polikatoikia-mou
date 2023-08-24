import mongoose from "mongoose";
const { ObjectId } = mongoose.Types;

const BlockOfFlatsSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    address: {
        road: {
            type: String,
            required: true
        },
        number: {
            type: Number,
            required: true
        },
        postalCode: {
            type: Number,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        location: {
            lat: {
                type: Number,
                required: true
            },
            lng: {
                type: Number,
                required: true
            }
        },
        usersId: {
            type: [ObjectId],
            ref:'User',
            default: []
        },
        adminId: {
            type: ObjectId,
            ref:'User',
            required: true
        },
        appartementsId: {
            type: [ObjectId],
            ref:"Appartment",
            default:[]
        }
    }
}, {timestamps: true});

const BlockOfFlats = mongoose.model("BlockOfFlat", BlockOfFlatsSchema);
export default BlockOfFlats;