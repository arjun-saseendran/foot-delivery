import mongoose from "mongoose";

const dbConnecton = async() => {

    await mongoose.connect(`${process.env.MONGODB_URL}`).then(()=> console.log('MongoDB connecton successfull')
    ).catch(error => console.log('MongoDB connection error ',error)
    )
}

export default dbConnecton