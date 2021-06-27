import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import { Provider } from 'react-redux';
import basic from './redux/store/basic';


//sitas provideris provaiderins Appsa ir viska, kas yra tame App'se informacija. VISKAM
//provideris yra REDUX'o dalis ir jame mes kaupsime informaciją
//ta informacija kaupsime STORE propse
ReactDOM.render(
  /*sitam store turi buti pagamintas failiukas arba store ir bus sujungtas su reduceriais*/
  /* Reduceriai sita store maitins informacija, ta info pateks i provideri, o provideris is virsaus dalins kam tos info reikia 
  T.y. - Reduceriuose kazkas vyksta, tas kazkas atsiranda store, o store gali ta info padalinti*/
  <Provider store={basic}>
    <App />
  </Provider>,
  document.getElementById('root')
);

//originalas
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


