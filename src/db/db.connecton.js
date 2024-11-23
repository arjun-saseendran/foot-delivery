import mongoose from "mongoose";

const dbConnecton = async() => {

    await mongoose.connect().then(()=> console.log('MongoDB connecton successfull')
    ).catch(error => console.log('MongoDB connection error ',error)
    )
}