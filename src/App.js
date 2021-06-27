import './books/Book.css';
import BasicShip from './redux/components/BasicShip';
import BasicTrain from './redux/components/BasicTrain';

import basic from './redux/store/basic';
import { addShip, addTrain } from './redux/actions';

const doAddShip = () => {

  basic.dispatch(addShip({ type: 'diesel boat', long: '100' }))
}

function App() { // <---- komponentas
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
    </div>
  );
}

export default App;
