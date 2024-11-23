import { Router } from "express";
import {
  renderFoods,
  addFood,
  updateFood,
  deleteFood,
} from "../controllers/food.controllers.js";

const router = Router();

router.get("/", renderFoods);
router.post("/", addFood);
router.put("/", updateFood);
router.delete("/", deleteFood);

export default router