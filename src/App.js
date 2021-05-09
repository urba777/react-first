//KNYGYNAS
import { useContext, useEffect, useRef, useState } from 'react';
import './books/Book.css';
import BooksList from './books/components/BooksList';
import Types from './books/contexts/Types';
import API from './books/shared/booksAPI';

const App = () => {

  const [typesOpenBooks, setTypesOpenBooks] = useState('no');
  const [loading, setLoading] = useState('');

  const [books, setBooks] = useState([]);
  const [types, setTypes] = useState([]);
  //const types = useContext(Types); //desime i localStorage knygu tipus


  const [errorBooks, setErrorBooks] = useState('');

  useEffect(() => {
    if (!types.length) {
      setLoading('https://icon-library.com/images/loading-icon-transparent-background/loading-icon-transparent-background-12.jpg');
    }
  }, []);

  useEffect(() => {
    console.log('START TYPES');
    API.get('/types/') //https://in3.dev/knygos/types - kategoriju sarasas
      .then(response => {
          setLoading('');
          console.log(response.data);
          setTypes(response.data);
          setTypesOpenBooks('yes');
      })
      .catch(error => { })
  }, []);

  useEffect(() => {
    if (typesOpenBooks === 'yes') {
      console.log('START BOOKS');

      API.get('')
        .then(response => {
          console.log(response.data);
          setBooks(response.data);
        })
        .catch(error => {
          setErrorBooks('Error while getting book list');
        })
    }
  }, [typesOpenBooks]);


  return (
    <div className="App">
      <header className="App-header">
        <span>Books Store</span>
      </header>
      {/* <Types.Provider value={types}> */}
      <main>
        <img className='loadingImg' src={loading}></img>
        <BooksList types={types} errorBooks={errorBooks} books={books} />
      </main>
      {/* </Types.Provider> */}
      <footer>

      </footer>
    </div>

  );
}

export default App;