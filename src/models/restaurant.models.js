import mongoose, {Schema} from "mongoose";

const restaurantSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true
    },

    foods: {
        type: [Schema.Types.ObjectId],
        ref: 'foods'

    }
})

export const RestaurantSchema = mongoose.model('restaurant', restaurantSchema)