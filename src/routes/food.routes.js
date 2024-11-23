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
router.put("/:id", updateFood);
router.delete("/:id", deleteFood);

export default router