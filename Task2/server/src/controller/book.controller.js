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

        await book.save()

        
    } catch (error) {
        
    }
}