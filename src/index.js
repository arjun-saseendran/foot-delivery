import express from "express";
import dotenv from "dotenv";
import foodRouter from "../src/routes/food.routes.js";
import restaurantRouter from "../src/routes/restaurant.routes.js";
import dbConnecton from "./db/db.connecton.js";

dotenv.config({ path: "./.env" });
const port = process.env.PORT;
const app = express();

// middlewares
app.use(express.json());

// routes
app.use("/food", foodRouter);
app.use("/restaurant", restaurantRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  dbConnecton();
});
