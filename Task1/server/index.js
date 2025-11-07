import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

const app=express();
dotenv.config()
app.use(cors())
app.use(express.json())
app.get('/',(req,res)=>{
    res.json({message:"Talking from server"})
    
})

const PORT=process.env.PORT || 4000;
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})