//VINTED
import { useEffect, useState } from 'react';
import './minigame/Style.css';
import GameHeader from './minigame/components/GameHeader';
import AllBuildings from './minigame/components/AllBuildings';
import allBuildings from './minigame/buildings/allBuildings';
import { useReducer } from 'react';
import buildingReducer from './minigame/reducers/buildingReducer';

const App = () => {

  //resources
  const [gold, setGold] = useState(300);
  const [wood, setWood] = useState(300);
  const [food, setFood] = useState(300);
  const [stone, setStone] = useState(300);
  const [workers, setWorkers] = useState(0);

  const [buildings, dispatchBuildings] = useReducer(buildingReducer, allBuildings);

  //XP + LEVEL
  const [xpLevel, setXpLevel] = useState(0); //50 + 50 = 100, tada lvl2 ir xplevel0
  const [playerLevel, setPlayerLevel] = useState(1);

  // useEffect(() => {
  //   //gold factory
  //   if (buildings[0].level === 1) {
  //     setXpLevel(xp => xp + 20);
  //   } else if (buildings[0].level === 2) {
  //     setXpLevel(xp => xp + 10);
  //   } else if (buildings[0].level === 3) {
  //     setXpLevel(xp => xp + 12.5);
  //   } else if (buildings[0].level === 4) {
  //     setXpLevel(xp => xp + 6.25);
  //   } else if (buildings[0].level === 5) {
  //     setXpLevel(xp => xp + 3.125);
  //   } else if (buildings[0].level === 6) {
  //     setXpLevel(xp => xp + 1.5625);
  //   } else if (buildings[0].level === 7) {
  //     setXpLevel(xp => xp + 0.78125);
  //   }
  //   //food
  //   if (buildings[1].level) {
  //     setXpLevel(xp => xp + 20);
  //   } else if (buildings[1].level === 2) {
  //     setXpLevel(xp => xp + 10);
  //   } else if (buildings[1].level === 3) {
  //     setXpLevel(xp => xp + 5);
  //   } else if (buildings[1].level === 4) {
  //     setXpLevel(xp => xp + 2.5);
  //   } else if (buildings[1].level === 5) {
  //     setXpLevel(xp => xp + 1.25);
  //   } else if (buildings[1].level === 6) {
  //     setXpLevel(xp => xp + 1.5625);
  //   } else if (buildings[1].level === 7) {
  //     setXpLevel(xp => xp + 0.78125);
  //   }
  // }, buildings);

  useEffect(() => {
    if (xpLevel >= 100) {
      setPlayerLevel(lvl => lvl + 1);
      setXpLevel(0);
    }
  }, [xpLevel]);


  //RESOURCES STATES CHANGING!!!!!!!!!!!!!!!!///////////////////////////////////
  //gives gold because of Gold Factory
  useEffect(() => {
    if (buildings[0].level >= 1) {
      const timerID = setInterval(() => {
        setGold(gold => gold + (2 * buildings[0].level));
      }, 1000);
      return () => clearInterval(timerID);
    }
  }, [buildings]);

  //gives food because of Mill building
  useEffect(() => {
    if (buildings[1].level >= 1) {
      const timerID = setInterval(() => {
        setFood(food => food + (2 * buildings[1].level));
      }, 1000);
      return () => clearInterval(timerID);
    }
  }, [buildings]);

  //gives wood because of Mill building
  useEffect(() => {
    if (buildings[2].level >= 1) {
      const timerID = setInterval(() => {
        setWood(wood => wood + (2 * buildings[2].level));
      }, 1000);
      return () => clearInterval(timerID);
    }
  }, [buildings]);

  //gives stone because of Mill building
  useEffect(() => {
    if (buildings[3].level >= 1) {
      const timerID = setInterval(() => {
        setStone(stone => stone + (2 * buildings[3].level));
      }, 1000);
      return () => clearInterval(timerID);
    }
  }, [buildings]);
  //END OF RESOURCES STATES CHANGING////////////////////////////////////////

  const setRess = () => {
    setGold(gold => gold + 500);
    setFood(food => food + 500);
    setWood(wood => wood + 500);
    setStone(stone => stone + 500)
  };

  return (
    <div className="App">
      <header>
        <GameHeader
          gold={gold}
          food={food}
          wood={wood}
          stone={stone}
          xpLevel={xpLevel}
          playerLevel={playerLevel}
          workers={workers}
        />
        {/* <Building name={'Gold factory'} gives={'1'} earnings={manorEarnings} sum={manors} price={10} money={money} buyAppartment={buildManor} makes={aboutManor} />
          <Building name={'Medzio dirbtuves'} gives={'2'} earnings={parduotuvesEarnings} sum={parduotuves} price={15} money={money} buyAppartment={buyParduotuve} makes={aboutLumberMill} /> */}

      </header>

      <main>
        <AllBuildings
          allBuildings={buildings}
          dispatchBuildings={dispatchBuildings}
          gold={gold}
          food={food}
          wood={wood}
          stone={stone}
          setGold={setGold}
          setFood={setFood}
          setWood={setWood}
          setStone={setStone}
          setWorkers={setWorkers}
        />
      </main>

      <footer><button onClick={() => setRess()}>SET</button></footer>
    </div>

  );
}

export default App;