import mongoose from "mongoose";
const { ObjectId } = mongoose.Types;

const RequestSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: Number,
        default: 0, // 0 for general request and other numbers will be assigned to specific categories
        required: true
    },
    userId: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    blockOfFlatsId: {
        type: ObjectId,
        ref: 'BlockOfFlats',
        required: true
    },
    // ΦΩΤΟΓΡΑΦΙΕΣ
    location: {
        type: String
    },
    receiver: {
        type: ObjectId,
        required: true,
        default: null // αν είναι ενοικιαστής στον ιδιοκτήτη ή κοινόχρηστα αλλιώς κοινόχρηστα.
    },
    progress: {
        type: [{
            date:{
                type : Date,
                default:Date.now()
            },
            title: {
                type: String
            },
            description: {
                type: String
            }
        }],
        default: []
    },
    comments: {
        type: [{
            userId: {
                type: ObjectId,
                ref:'User',
                required: true
            },
            content: {
                type:String,
                required: true
            }
        }],
        default: []
    },
    likes: {
        type: [ObjectId],
        ref:"User",
        default:[]
    }
}, {timestamps: true});

const Request = mongoose.model("Request", RequestSchema);
export default Request;