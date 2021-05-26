//VINTED
import { useContext, useEffect, useRef, useState } from 'react';
import './Game.css';
import House from './minigame/components/House';
import Money from './minigame/components/Money';


const App = () => {

  const [money, setMoney] = useState(0);
  const [kioskai, setKioskai] = useState(0);
  const [kioskoEarnings, setKioskoEarnings] = useState(0);
  const [parduotuvesEarnings, setParduotuvesEarnings] = useState(0);
  const [parduotuves, setParduotuves] = useState(0);


  const plusOneMoney = () => {
    let cash = 1 + money;
    setMoney(cash);
  }

  const buyKiosk = () => {
    if (money >= 10) {
      setMoney(money => money - 10);
      setKioskai(kioskas => kioskas + 1);
    }
  }

  const buyParduotuve = () => {
    if (money >= 15) {
      setMoney(money => money - 15);
      setParduotuves(shop => shop + 1);
    }
  }

  useEffect(() => {
    if (kioskai >= 1) {
      const timerID = setInterval(() => {
        setMoney(money => kioskai + money);
        setKioskoEarnings(earnings => earnings + kioskai);
      }, 1000);
      return () => clearInterval(timerID);
    }
  }, [kioskai]);

  useEffect(() => {
    if (parduotuves >= 1) {
      const timerID = setInterval(() => {
        setMoney(money => (parduotuves * 2) + money);
        setParduotuvesEarnings(earnings => earnings + parduotuves * 2);
      }, 1000);
      return () => clearInterval(timerID);
    }
  }, [parduotuves]);


  return (
    <div className="App">
      <header>
        <h2><Money money={money} plusOneMoney={plusOneMoney}/></h2>
        <div className='inlineBox'>
          <House name={'Kioskelis'} gives={'1'} earnings={kioskoEarnings} sum={kioskai} price={10} money={money} buyAppartment={buyKiosk} />
          <House name={'Parduotuve'} gives={'2'} earnings={parduotuvesEarnings} sum={parduotuves} price={15} money={money} buyAppartment={buyParduotuve} />
        </div>
      </header>
    </div>

  );
}

export default App;