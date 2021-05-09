import { useContext } from "react";
import Types from "../contexts/Types";

const Book = ({ book, types }) => {

    // const types = useContext(Types);
    let type = 'LOADING';
    const getType = types.filter(type => type.id === book.type);
    if (getType.length) {
        type = getType[0].title;
    }

    return (
        <li>
            <div className='content'>
                <div className='bookTitle'>{book.title}</div>
                <div className='bookAuthor'>{book.author}</div>
                <img src={book.img}></img>
                <div className='bookPrice'>{book.price} &euro;</div>
                <div className='cat'>{type}</div>
            </div>
        </li>
    );
}

export default Book;