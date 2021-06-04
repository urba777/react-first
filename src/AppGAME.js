//VINTED
import { useContext, useEffect, useRef, useState } from 'react';
import './Game.css';
import House from './minigame/components/House';
import Money from './minigame/components/Money';
import { aboutLumberMill, aboutManor } from './minigame/shared/about';


const App = () => {

  //money
  const [money, setMoney] = useState(0);

  //buildings
  const [manors, setManors] = useState(0);
  const [manorEarnings, setManorEarnings] = useState(0);
  const [parduotuvesEarnings, setParduotuvesEarnings] = useState(0);
  const [parduotuves, setParduotuves] = useState(0);

  //resource earnings

  const plusOneMoney = () => {
    let cash = 1 + money;
    setMoney(cash);
  }

  const buildManor = () => {
    if (money >= 10) {
      setMoney(money => money - 10);
      setManors(manor => manor + 1);
    }
  }

  const buyParduotuve = () => {
    if (money >= 15) {
      setMoney(money => money - 15);
      setParduotuves(shop => shop + 1);
    }
  }

  useEffect(() => {
    if (manors >= 1) {
      const timerID = setInterval(() => {
        setMoney(money => manors + money);
        setManorEarnings(earnings => earnings + manors);
      }, 1000);
      return () => clearInterval(timerID);
    }
  }, [manors]);

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
          <House name={'Aukso kasykla'} gives={'1'} earnings={manorEarnings} sum={manors} price={10} money={money} buyAppartment={buildManor} makes={aboutManor}/>
          <House name={'Medzio dirbtuves'} gives={'2'} earnings={parduotuvesEarnings} sum={parduotuves} price={15} money={money} buyAppartment={buyParduotuve} makes={aboutLumberMill}/>
        </div>
      </header>
    </div>

  );
}

export default App;