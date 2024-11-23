import { Router } from "express";
import {
  renderRestaurants,
  addRestaurant,
  updateRestaurant,
  deleteRestaurant,
} from "../controllers/restaurant.controllers.js";

const router = Router();

router.get("/", renderRestaurants);
router.post("/", addRestaurant);
router.put("/", updateRestaurant);
router.delete("/", deleteRestaurant);

export default router;
