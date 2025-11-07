import express from 'express'



const app=express();
app.get('/',(req,res)=>{
    res.json({message:"Talking from server"})
    
})

const PORT=process.env.PORT || 4000;
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})