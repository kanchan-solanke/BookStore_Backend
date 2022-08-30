import express from 'express';
import * as bookController from '../controllers/book.controller';

const router = express.Router();

//route to get all books
router.get('/', bookController.getBook);

//route to get  book by id
router.get('/:id', bookController.getBookById);



export default router;
