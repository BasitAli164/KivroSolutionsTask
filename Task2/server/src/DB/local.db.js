import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config()

const databaseConnection= async()=>{
    try {
        await mongoose.connect(`${process.env.DATABASE_URI}`)
        console.log(`Database Connect at ${process.env.DATABASE_URI} Successfully... `)
        
    } catch (error) {
        
    }
}
