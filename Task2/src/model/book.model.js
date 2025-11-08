import mongoose from 'mongoose'


const bookSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true, 
        trim:true       
    },
    author:{
        type:String,
        required:true,
        trim:true
    },
    bookNumber:{ // Unique book identifier (International Standard Book Number) 
        type:String,
        trim:true
    },
    bookType:{  // Type or category of the book (e.g., Fiction, History, Science)
        type:String,
        trim:true,
    },
    publishYear:{
        type:Number,

    }

},{
    timestamps:true
})

export default mongoose.model("Book",bookSchema)