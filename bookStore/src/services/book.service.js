import Book from '../models/book.model';

//get all books
export const getBook = async () => {
    const data = await Book.find();
    return data;
}


//create new user
export const getBookById = async (id) => {
    const data = await Book.findById({ _id: id });
    return data;

};



