import  Restaurant  from "../models/restaurant.models.js";

const renderRestaurants = async(req, res)=>{
    try {

        const restaurants = await Restaurant.find()
        res.status(200).json(restaurants)
        
    } catch (error) {

        res.status(400).json({message: error})
        
    }
}