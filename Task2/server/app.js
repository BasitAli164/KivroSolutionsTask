import express from  'express';
import dotenv from 'dotenv';
import router from './src/routes/book.routes.js';
dotenv.config()
const app=express()

app.use(express.json({limit:process.env.LIMITS}))
app.use(express.urlencoded({ extended: true, limit: process.env.LIMITS })); 
app.use('/api/book/',router)

export default app