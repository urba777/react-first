import Book from "./Book";
import { v4 as uuidv4 } from 'uuid';

const BooksList = ({ books, errorBooks}) => {


    return (
        <>
        <h1 style={{color: 'red'}}>{errorBooks}</h1>
            <ul className='booksList'>
                {
                    books.map((book) => <Book key={uuidv4()} book={book}></Book>)
                }
            </ul>
        </>
    );
}

export default BooksList;