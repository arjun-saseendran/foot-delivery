import Food from "../models/food.models.js";

const renderAllFoods = async (req, res) => {
  try {
    const foods = await Food.find();
    res.status(200).json(foods);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};
const addFood = async (req, res) => {
  try {
    const { title, category, price, description } = req.body;
    const food = new Food({ title, category, price, description });
    food.save().then((response) => console.log(response));

    res.status(201).json({ message: "Food added" });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};
const updateFood = async (req, res) => {
  try {
    const { id } = req.params;

    await Food.findByIdAndUpdate(id, req.body);

    res.status(202).json({ message: "Updated" });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};
const deleteFood = async (req, res) => {
  try {
    const { id } = req.params;

    await Food.findByIdAndDelete(id);

    res.status(204).json({ message: "Deleted" });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

export {renderAllFoods, addFood, updateFood, deleteFood}
