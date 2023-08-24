import mongoose from "mongoose";
const { ObjectId } = mongoose.Types;

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    authorId: {
        type: ObjectId,
        ref: 'User', // reference to the User model (which has an _id field)
        required: true
    },
    blockOfFlatsId:{
        type:ObjectId,
        ref:'BlockOfFlats'//reference to Block of flats Model(Which have a
    },
    category: {
        type: Number,
        default: 0
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

const Post = mongoose.model("Post", PostSchema);
export default Post;