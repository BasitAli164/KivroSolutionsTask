import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'


dotenv.config()
const app=express();
app.use(cors())
app.use(express.json())


// Router
app.get('/',(req,res)=>{
    res.json({message:"Talking from server"})
    
})

app.post('/contact',(req,res)=>{
    const {name,email,message}=req.body
    console.log("Received contact form data:")
    console.log(`Name:${name}\nEmail:${email}\nMessage:${message}`)

})

const PORT=process.env.PORT || 4000;
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})