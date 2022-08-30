import HttpStatus from 'http-status-codes';
import * as cartService from '../services/cart.service';

//add books in cart
export const addCart = async (req, res) => {
  try {
    
    const data = await cartService.addCart(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'book add in cart successfully'
    });
  }
  catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`

    });
  }
};

