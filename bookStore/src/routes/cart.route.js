import express from 'express';
import * as cartController from '../controllers/cart.controller';

const router = express.Router();

//route to get all books
router.get('/', cartController.getBook);

//route to add book in cart
router.post('/:id', cartController.getBookById);

//route to update book in cart
router.put('/:id', cartController.getBookById);

//route to delete book in cart
router.delete('/:id', cartController.getBookById);


export default router;
