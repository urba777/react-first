import './App.css';

import ClasicBox from './components/ClasicBox';
import BoxUniversalum from './components/BoxUniversalum';
import { normalStyle, fancyStyle } from './shared/styles';
import { getRandomInt } from './functions';
import TwoButtonBox from './components/TwoButtonBox';
import Box from './components/Box';
import UlBox from './components/UlBox';
import ClassicForm from './components/ClassicForm';
import VolumeSlider from './components/VolumeSlider';
import InsideComposition1child from './components/InsideComposition1child';
import InsideComposition2child from './components/InsideComposition2child';
import GameBoxSliders from './components/GameBoxSliders';
import Message from './components/Message';
import Effect from './components/Effect';
import CountBoxes from './components/CountBoxes';
import UsersPosts from './components/UsersPosts';
import Hocs from './components/Hocs';
import GalleryHocs from './components/GalleryHocs';
import HocsUniversalus from './components/HocsUniversalus';
import CarBox from './components/CarBox';
import ButtonColor from './contexts/ButtonColor';
import { createRef, useContext } from 'react';
import UseRefBox from './components/UseRefBox';
import AppBoxCall from './components/AppBoxCall';
import MemoBox from './components/MemoBox';


const App = () => { // <---- pagrindinis komponentas
  const bttColor = useContext(ButtonColor);
  const ref = createRef(); //vaikiniam perduosim reference (UseRefBox komponentui)
  return (
    <div className="App">
      <header className="App-header">
        <h1>memo (Classwork) OPTIMIZAVIMAS</h1>
        <MemoBox />
        <h1>useCallback (Classwork) OPTIMIZAVIMAS</h1>
        <AppBoxCall boxStyle={normalStyle} />
        <h1>useRef (Classwork)</h1>
        <UseRefBox number={1} ref={ref} />
        <h1>useReducer (Classwork) + Local Storage <h1>+ useContext (propsu perdavimas is tevo tiesiogiai proanūkiui)</h1></h1>
        <ButtonColor.Provider value={bttColor}> {/* <-- useContext */}
          <CarBox boxStyle={normalStyle} />
        </ButtonColor.Provider>
        <h1>HOC simple and HOC Universal (Classwork)</h1>
        <h2 style={{ fontSize: 12 }}>Conditional rendering kitaip, jeigu atlieka keli žmonės skirtingai darbus<br></br>Jeigu yra masyvas, nera, arba tuscias</h2>
        <div className='inlineBox'>
          <Hocs />
          <div className='space TARPAS'></div>
          <HocsUniversalus />
        </div>
        <h1>Gallery with HOC(Loading) (Getting data from server) (Homework)</h1>
        <GalleryHocs />
        <h1>Get data from server, JSON (Classwork)</h1>
        <UsersPosts />
        <h1>Count Boxes, useEffect (Homework)</h1>
        <CountBoxes />
        <h1>HOOKS Effect, useEffect (Classwork)</h1>
        <Effect vardas1={'Jonas'} vardas2={'Gretute'} /> {/* FOKUSAS SU PROPSAIS DESTYTOJO*/}
        <h1>HOOKS State, useState (Classwork)</h1>
        <Message />
        <h1>Game with Sliders (Homework) HOOK'ed</h1>
        <GameBoxSliders />
        <h1>Composition (Classwork) HOOK'ed</h1>
        <div className="inlineBox">
          <InsideComposition1child />
          <InsideComposition2child />
        </div>
        <h1>Slider (Classwork)</h1>
        <VolumeSlider />
        <h1>Form (Homework)</h1>
        <ClassicForm />
        <h1>List (Classwork)</h1>
        <UlBox></UlBox>
        <h1>Roll dice (Homework)</h1>
        <Box></Box>
        <h1>Boxes with text and numbers</h1>
        <div className="inlineBox">
          <BoxUniversalum color={'red'} number={'test'} boxStyle={normalStyle} />
          <BoxUniversalum color={'yellow'} number={38} boxStyle={normalStyle} />
          <BoxUniversalum color={'green'} number={getRandomInt(100)} boxStyle={fancyStyle} />
        </div>
        <h1>Border color change</h1>
        <ClasicBox button1Title={'MAKE RED!'} button2Title={'MAKE GREEN!'} />
        <h1>Each other color change</h1>
        <TwoButtonBox />
      </header>
    </div>

  );
}

export default App;