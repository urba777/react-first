//VINTED
import { useContext, useEffect, useRef, useState } from 'react';
import './vinted/Style.css';
// import BooksList from './books/components/BooksList';
// import Types from './books/contexts/Types';
import API from './vinted/shared/productsAPI';
import Header from './vinted/components/Header';
import NewsList from './vinted/components/NewsList';

const App = () => {

  const [productsId, setProductsId] = useState([]);

  useEffect(() => {
    console.log('START PRODUCTS');

    API.get('/news/')
      .then(response => {
        console.log('START DATA');
        console.log(response.data);
        setProductsId(response.data);
      })
      .catch(error => {

      })
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      {/* <Types.Provider valyue={types}> */}
      <main>
        <NewsList productId={productsId}/>
      </main>
      {/* </Types.Provider> */}
      <footer>

      </footer>
    </div>

  );
}

export default App;