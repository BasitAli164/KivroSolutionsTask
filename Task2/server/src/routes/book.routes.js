import express from 'express'
import { addBook, deleteBookById, getAllBook, getBookById } from '../controller/book.controller';

const router=express.Router();

router.post('/addbook',addBook)
router.get('/getbook/:id',getBookById)
router.get('/getallbook',getAllBook)
router.delete('/del/:id',deleteBookById)


export default router