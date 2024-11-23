import mongoose, {Schema} from "mongoose";

const foodSchema =  new Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        requried: true
    },
    description:{
        type: String,

    },
    isAvailable:{
        type: Boolean,
        default: true
    },
    
})

export const Food = mongoose.model('food', foodSchema)