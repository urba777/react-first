import './books/Book.css';
import BasicShip from './redux/components/BasicShip';
import BasicTrain from './redux/components/BasicTrain';

import basic from './redux/store/basic';
import { addShip, addTrain } from './redux/actions';
import { selectShips } from './redux/selects';

function App() { // <---- komponentas


  ///SUBSCRIBE///gauname pranesima, jeigu kas pasikeite dispatchinant (paspaudus mygtuka ir pridejus i masyva kazka)
  // let currentShips = selectShips(basic.getState());
  basic.subscribe(() => {
    // if (currentShips !== selectShips(basic.getState())) {
    //   console.log('DER SHIPS!');

    // }
    // currentShips = selectShips(basic.getState());

    // console.log("Store updated", selectShips(basic.getState()));
    // console.log(basic.getState(); //duoda visa info apie traukinius, laivus
  });
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //pridedame traukinius arba laivus
  const doAddShip = () => {

    basic.dispatch(addShip({ type: 'diesel boat', long: Math.floor(Math.random() * 101) }))
  }

  const doAddTrain = () => {

    basic.dispatch(addTrain({ type: 'traukinio vagonas', long: '199' }))
  }
  ///

  return (
    <div className="App">
      <header className="App-header">
        SHIPS and TRAINS
      </header>
      <main>
        <BasicShip />
        <button onClick={() => doAddShip()}>
          ADD SHIP
        </button>
      </main>
      <main>
        <BasicTrain />
        <button onClick={() => doAddTrain()}>
          ADD TRAIN
        </button>
      </main>
    </div>
  );
}

export default App;
