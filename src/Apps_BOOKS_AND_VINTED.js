//KNYGYNAS
import { useContext, useEffect, useReducer, useState } from 'react';
import './books/Book.css';
import './vinted/Style.css';
import BookPager from './books/components/BookPager';
import BooksList from './books/components/BooksList';
import BooksTypeSelector from './books/components/BooksTypeSelector';
import VintedList from './books/components/VintedList';

import { GET_BOOKS_FROM_SERVER, SORT_PRICE_DOWN, SORT_PRICE_UP, RANDOM, SELECTED_BOOKS_FILTER, CHANGE_ITEMS_PER_PAGE, SET_ACTIVE_PAGE, GET_NEWS_FROM_SERVER, UPDATE_BOOKS_FROM_SERVER } from './books/constants';

import Types from './books/contexts/Types';

import bookReducer from './books/reducers/bookReducer';
import vintedReducer from './books/reducers/vintedReducer';

import API from './books/shared/booksAPI';
import API2 from './vinted/shared/productsAPI';

import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import VintedProductPage from './books/components/VintedProductPage';
// import History from './books/components/History';
import RouterHooks from './books/components/RouterHooks';

const App = () => {

  //vinted
  const [errorProducts, setErrorProducts] = useState(''); //error, jeigu nera produktu
  const [vinted, vintedDispatch] = useReducer(vintedReducer, { news: [], products: [] });

  //vinted atvaizdavimui
  useEffect(() => {
    API2.get('news/')
      .then(response => {
        vintedDispatch({ type: GET_NEWS_FROM_SERVER, payload: response.data })
      })
      .catch(error => {
        setErrorProducts('Error while getting products list');
      })
  }, []);

  //books
  const [books, booksDispatch] = useReducer(bookReducer, { showBooks: [], allBooks: [], activePage: 1 }); //tai, kas yra rodoma // showBooks: rodomos knygos, allBooks: visos knygos
  //puslapyje rodomu knygu skaicius (puslapiavimas)
  const [itemsPerPage] = useState(2); //viename puslapyje va tiek knygu 
  //


  //update TIME (laikas, kada mes esame upsideitine) patikrinimui, ar serveryje pasikeite kokia INFO
  //VIDEO 2021.05.07 01:05:30
  const [lastUpdateTime, setLastUpdateTime] = useState(Date.now());

  useEffect(() => {
    API.post(``, { time: (Math.round(lastUpdateTime / 1000) - 10) })
      .then(response => {
        booksDispatch({ type: UPDATE_BOOKS_FROM_SERVER, payload: { updatedBooks: response.data, itemsPerPage: itemsPerPage } });
      })
      .catch(error => { })

  }, [lastUpdateTime]);

  useEffect(() => {
    const lastUpdateTimerId = setInterval(
      () => setLastUpdateTime(Date.now()), 10000 //kas 10sec
    );
    return function cleanTimer() {
      clearInterval(lastUpdateTimerId);
    }
  }, []);


  //Date 
  const timestamp = Date.now();
  const date = new Date(timestamp);
  const fullDate = "Date: " + date.getDate() +
    "/" + (date.getMonth() + 1) +
    "/" + date.getFullYear() +
    " " + date.getHours() +
    ":" + date.getMinutes() +
    ":" + date.getSeconds();


  //select'ui
  const [typeSelectValue, setTypeSelectValue] = useState(0); //filtravimui nustato valuem aktyvus filtras pagal tipa

  //perduoti tipus (visu tipu sarasas)
  const [types, setTypes] = useState(useContext(Types));
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

  //knygu atvaizdavimui
  useEffect(() => {
    API.get('')
      .then(response => {
        console.log(response.data);
        booksDispatch({ type: GET_BOOKS_FROM_SERVER, payload: { allBooks: response.data, itemsPerPage: itemsPerPage } });
      })
      .catch(error => {
        setErrorBooks('Error while getting book list');
      })
  }, [itemsPerPage]);

  //filtravimui FILTER FILTER FILTER FILTER FILTER FILTER
  const handleTypeSelect = e => {
    setTypeSelectValue(parseInt(e.target.value));
    booksDispatch({ type: SELECTED_BOOKS_FILTER, payload: { value: parseInt(e.target.value), itemsPerPage: itemsPerPage } })
  }

  //nustato pasirinkta puslapi (puslapiavimas)
  const handlePageSelect = activePage => {
    console.log(activePage);
    booksDispatch({ type: SET_ACTIVE_PAGE, payload: { activePage: activePage, itemsPerPage: itemsPerPage } });
  }
  useEffect(() => {
    booksDispatch({ type: CHANGE_ITEMS_PER_PAGE, payload: { itemsPerPage: itemsPerPage } });
  }, [itemsPerPage]); //itraukiam i sarasiuka, jeigu kazkas pakeistu kazkuri, iskart persirendirentu
  //***END OF PAGING ^^^ */

  return (
    <div className="App">
      <Router>
        <Types.Provider value={types}>
          <header className="App-header">
            <Link to='/'>
              <span>Home</span>
            </Link>
            <Link to='/books-store'>
              <span>Books Store</span>
            </Link>
            <Link to='/vinted/news'>
              <span>Vinted news</span>
            </Link>

            <Switch> {/* VIDEO 2021.05.05 01:27:00 sustabdo komponentu kitu rendinima, kai suranda pirma atitikima. GALIMA NAUDOTI BE SWITCH! */}
              <Route path='/books-store'>
                <div className="buttonsHolder">
                  <BooksTypeSelector handleTypeSelect={handleTypeSelect} typeSelectValue={typeSelectValue} />
                  <button className="filterButton">Apply filter</button> {/* onClick={() => doSortPriceUp() BE REDUCER */}
                  <button className="sortButton" onClick={() => booksDispatch({ type: SORT_PRICE_UP, payload: { itemsPerPage: itemsPerPage } })}>Sort by price UP</button> {/* onClick={() => doSortPriceUp() BE REDUCER */}
                  <button className="sortButton" onClick={() => booksDispatch({ type: SORT_PRICE_DOWN, payload: { itemsPerPage: itemsPerPage } })}>Sort by price DOWN</button> {/* onClick={() => doSortPriceUp() BE REDUCER */}
                  <button className="sortButton" onClick={() => booksDispatch({ type: RANDOM, payload: { itemsPerPage: itemsPerPage } })}>RANDOM</button>
                </div>
              </Route>
            </Switch>
          </header>

          <main>
            {/* useHistory VIDEO 2021.05.05 01:44:00 */}
            {/* <History></History> */}
            {/* useLocation, useRouteMatch : VIDEO 2021.05.07 */}
            <RouterHooks />
          </main>

          <Switch>

            <Route path='/books-store'> {/* exact nurodo tiksliai puslapi, kad po / (slesho) niekas neveiktu */}
              <main>
                <BooksList errorBooks={errorBooks} books={books.showBooks} />
                <BookPager activePage={books.activePage} handlePageSelect={handlePageSelect} itemsPerPage={itemsPerPage} showedItemsCount={books.showBooks.length} allItemsCount={books.allBooks.length} />
              </main>
            </Route>



            <Route exact path='/vinted/news'> {/* exact nurodo tiksliai puslapi, kad po / (slesho) niekas neveiktu */}
              <main>
                <VintedList vintedDispatch={vintedDispatch} errorProducts={errorProducts} vinted={vinted} />
              </main>
            </Route>

            <Route exact path='/vinted/product/:id'> {/* su parametru id parodysime tik viena norima preke su useParams() */}
              <main>
                <VintedProductPage vinted={vinted} />
              </main>
            </Route>

            <Route exact path='/'> {/* exact nurodo tiksliai puslapi, kad po / (slesho) niekas neveiktu */}
              <main>
                <h3 style={{ textAlign: 'center' }}>Select page</h3> {/* rodo kaip main-page */}
              </main>
            </Route>

            <Route path='*'> {/* cia gali buti bet kas bet tik su SWITCH*/}
              <main>
                <h3 style={{ textAlign: 'center' }}>404 PAGE NOT FOUND</h3> {/* jei nebus atitikmens, ismes sita */}
              </main>
            </Route>

          </Switch>
          <footer style={{ marginTop: '50px' }}>
            {fullDate}
          </footer>
        </Types.Provider>
      </Router>
    </div>

  );
}

export default App;