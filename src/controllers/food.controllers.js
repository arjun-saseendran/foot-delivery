import {Food} from "../models/food.models.js";

const renderFoods = async (req, res) => {
  try {
    const foods = await Food.find();
    res.status(200).json(foods);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
const addFood = async (req, res) => {
  try {
    const { title, image, category, price, description, isAvailable } = req.body;
    const food = new Food({ title, image, category, price, description, isAvailable });
    food.save()

    res.status(201).json({ message: "Created" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
const updateFood = async (req, res) => {
  try {
    const { id } = req.params;

    await Food.findByIdAndUpdate(id, req.body);

    res.status(202).json({ message: "Updated" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
const deleteFood = async (req, res) => {
  try {
    const { id } = req.params;

    await Food.findByIdAndDelete(id);

    res.status(204).json({ message: "Deleted" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export {renderFoods, addFood, updateFood, deleteFood}
