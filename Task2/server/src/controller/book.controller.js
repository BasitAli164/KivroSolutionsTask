import Book from "../model/book.model";


const addBook=async (req,res)=>{
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
        
    }
}