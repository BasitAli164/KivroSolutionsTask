import Book from "../model/book.model";


export const addBook=async (req,res)=>{
    const {title,author,bookUniqeNo,description,publishedYear,totalCopies}=req.body
    console.log("Res.body:",req.body)
    try {
        const book=new Book({
            title,
            author,
            bookUniqeNo,
            description,
            publishedYear,
            totalCopies

        })
        console.log("Book is:",book)

        await book.save()
        res.status(201).json({
            status:201,
            message:"Book added successfully",
            bookDetail:book,

        })

        
    } catch (error) {
        console.log("Error during adding book",error)
        return res.status(500).json({
            status:500,
            message:"Server side error.....!",
            err:error,
        })
        
    }
}

export const getAllBook=async(req,res)=>{
    try {

        const allBook=await Book.find()
        if(!allBook){
            return res.status(400).json({
                status:400,
                message:"Book not found",
            })
        } 
        
        return res.status(200).json({
            status:200,
            message:"All Books Detail are:-",
            book:allBook
        })
    } catch (error) {
        console.log("Error facing during getting all book:",error)
        return res.status(500).json({
            status:500,
            message:"Server side error",
            err:error
        })
        
    }
}

export const getBookById=async(req,res)=>{
    const {id}=req.params
    try {
        const book=await Book.findById(id)
        console.log("Get book by it id: ",book)
        if(!book){
            return res.status(400).json({
                status:400,
                message:"Book not found"
            })
        }

        return res.status(200).json({
            status:200,
            message:"Book detail is:",
            bookDetail:book,
        })
        
    } catch (error) {
        console.log("Facing error during book getting by id:",error)
        return res.status(500).json({
            status:500,
            message:"Internal Server Error"
            err:error
        })
    }
}