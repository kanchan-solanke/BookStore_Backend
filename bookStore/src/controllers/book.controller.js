import HttpStatus from 'http-status-codes';
import * as BookService from '../services/book.service';

export const getBook = async (req, res) => {
    try {
        const data = await BookService.getBook(req.body);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: 'User get books successfully'
        });
    }
    catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({
            code: HttpStatus.BAD_REQUEST,
            message: `${error}`
        });
    }
};

export const getBookById = async (req, res) => {
    try {
        const data = await BookService.getBookById(req.params.id);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: 'User get books by id successfully'
        });
    }
    catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({
            code: HttpStatus.BAD_REQUEST,
            message: `${error}`
        });
    }
};

