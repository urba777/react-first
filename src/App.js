//KNYGYNAS
import { useContext, useEffect, useReducer, useRef, useState } from 'react';
import './books/Book.css';
import BooksList from './books/components/BooksList';
import BooksTypeSelector from './books/components/BooksTypeSelector';
import { GET_BOOKS_FROM_SERVER, SORT_PRICE_DOWN, SORT_PRICE_UP, RANDOM, SELECTED_BOOKS_FILTER } from './books/constants';
import Types from './books/contexts/Types';
import bookReducer from './books/reducers/bookReducer';
import API from './books/shared/booksAPI';

const App = () => {

  const [books, booksDispatch] = useReducer(bookReducer, []); //tai, kas yra rodoma
  //select'ui
  const [typeSelectValue, setTypeSelectValue] = useState(0); //filtravimui nustato valuem aktyvus filtras pagal tipa
  const [allBooks, setAllBooks] = useState([]); // visu knygu sarasas, filtravimui, kad butu state nesikeiciantis per Reduceri, sukuriamas sitas, o paskui per useEffect i reduceri

  //perduoti tipus (visu tipu sarasas)
  const [types, setTypes] = useState(useContext(Types));
  //const types = useContext(Types); //desime i localStorage knygu tipus
  const [errorBooks, setErrorBooks] = useState(''); //error, jeigu nera knygu

  //categories, types list (tipu sarasas) + localStorage
  useEffect(() => {
    const bookTypes = JSON.parse(localStorage.getItem('bookTypes')); //localStorage

    console.log(bookTypes, 'bookTypes');
    if (!bookTypes) {
      API.get('/types/') //https://in3.dev/knygos/types - kategoriju sarasas
        .then(response => {
          setTypes(response.data); //ikisa i useContext(Types)
          localStorage.setItem('bookTypes', JSON.stringify(response.data));
          console.log(bookTypes, 'bookTypes');
        })
        .catch(error => { })
    }
  }, []);

  //book list
  useEffect(() => {
    console.log('START BOOKS');

    API.get('')
      .then(response => {
        console.log(response.data);
        // setBooks(response.data);
        setAllBooks(response.data); //idedu iskart i state visas knygas
      })
      .catch(error => {
        setErrorBooks('Error while getting book list');
      })
  }, []);


  useEffect(() => {
    booksDispatch({ type: GET_BOOKS_FROM_SERVER, payload: allBooks });
  }, [allBooks]);

  //filtravimui FILTER FILTER FILTER FILTER FILTER FILTER
  const handleTypeSelect = e => {
    setTypeSelectValue(parseInt(e.target.value));
    booksDispatch({ type: SELECTED_BOOKS_FILTER, payload: { value: parseInt(e.target.value), allBooks: allBooks } })
  }

  //Mygtukai SORT - paprastai, be REDUCER
  // const doSortPriceUp = () => {
  //   const sorted = [].concat(books).sort((a, b) => a.price > b.price ? 1 : -1); //concat - sulipina du masyvus. Pirmas []. - neturime, tai tuscias
  //   setBooks(sorted);
  // }

  // const doSortPriceDown = () => {
  //   const sorted = [].concat(books).sort((a, b) => a.price < b.price ? 1 : -1); //concat - sulipina du masyvus. Pirmas []. - neturime, tai tuscias
  //   setBooks(sorted);
  // }

  return (
    <div className="App">
      <Types.Provider value={types}>
        <header className="App-header">
          <span>Books Store</span>
          <div className="buttonsHolder">
            <BooksTypeSelector handleTypeSelect={handleTypeSelect} typeSelectValue={typeSelectValue} />
            <button className="filterButton">Apply filter</button> {/* onClick={() => doSortPriceUp() BE REDUCER */}
            <button className="sortButton" onClick={() => booksDispatch({ type: SORT_PRICE_UP })}>Sort by price UP</button> {/* onClick={() => doSortPriceUp() BE REDUCER */}
            <button className="sortButton" onClick={() => booksDispatch({ type: SORT_PRICE_DOWN })}>Sort by price DOWN</button> {/* onClick={() => doSortPriceUp() BE REDUCER */}
            <button className="sortButton" onClick={() => booksDispatch({ type: RANDOM })}>RANDOM</button>
          </div>
        </header>
        <main>
          <BooksList errorBooks={errorBooks} books={books} />
        </main>
      </Types.Provider>
      <footer>

      </footer>
    </div>

  );
}

export default App;