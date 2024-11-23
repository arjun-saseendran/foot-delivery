import Restaurant from "../models/restaurant.models.js";

const renderRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.status(200).json(restaurants);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
const addRestaurant = async (req, res) => {
  try {
    const { title, address } = req.body;
    const restaurant = new Restaurant({ title, address });
    await restaurant.save();
    res.status(201).json({ message: "Added" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
const updateRestaurant = async (req, res) => {
  try {
    const { id } = req.params;
    await Restaurant.findByIdAndUpdate(id, req.body);
    res.status(202).json({ message: "Updated" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
const deleteRestaurant = async (req, res) => {
  try {
    const { id } = req.params;
    await Restaurant.findByIdAndDelete(id);
    res.status(202).json({ message: "Deleted" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export {renderRestaurants, addRestaurant, updateRestaurant, deleteRestaurant}