import BookType from "./BookType";

const Book = ({ book }) => { //types hook uzrasyti, jeigu naudojame hooka o ne provider

    return (
        <li>
            <div className='content'>
                <div className='bookTitle'>{book.title}</div>
                <div className='bookAuthor'>{book.author}</div>
                <img src={book.img} alt={book.title}></img>
                <div className='bookPrice'>{book.price} &euro;</div>
                <BookType bookType={book.type}/>
            </div>
        </li>
    );
}

export default Book;