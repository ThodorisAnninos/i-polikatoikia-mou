import mongoose from "mongoose";

const AppartementSchema = new mongoose.Schema({
    floor: {
        type: Number
    },
    blockOfFlatsId:{
        type: ObjectId,
        ref:"BlockOfFlats",
        required : true
    },
    rent: {
        type: Boolean,
        default: false
    },
    ownerId: {
        type: ObjectId,
        ref:'User',
        required:true,
    },
    renterId: {
        type:ObjectId,
        ref:'User',
        required: function() {
            return this.rent === true;
        }
    }
}, {timestamps: true});

const Appartement = mongoose.model("Appartement", AppartementSchema);
export default Appartement;