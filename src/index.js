import express from 'express'
import dotenv from 'dotenv'
import foodRouter from '../src/routes/food.routes.js'
import restaurantRouter from '../src/routes/restaurant.routes.js'

const app = express()
dotenv.config({path: './.env'})
const port = process.env.PORT

// middlewares 
app.use(express.json())

// routes
app.use('/food', foodRouter)
app.use('/restaurant', restaurantRouter)


app.listen(port, ()=> console.log(`Server running on port ${port}`))