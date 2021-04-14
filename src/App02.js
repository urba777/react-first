import './App.css';

import ClasicBox from './components/ClasicBox';
import BoxUniversalum from './components/BoxUniversalum';
import { normalStyle, fancyStyle } from './shared/styles';
import { getRandomInt, roll, result } from './functions';
import TwoButtonBox from './components/TwoButtonBox';
import Box from './components/Box';
import UlBox from './components/UlBox';
import ClassicForm from './components/ClassicForm';
import VolumeSlider from './components/VolumeSlider';
import InsideComposition1child from './components/InsideComposition1child';
import InsideComposition2child from './components/InsideComposition2child';
import GameBoxSliders from './components/GameBoxSliders';
import GameBoxBall from './components/GameBoxBall';


function App() { // <---- pagrindinis komponentas
  return (
    <div className="App">
      <header className="App-header">
        <h1>setState Hooks (Classwork)</h1>
        
        <h1>Game (Homework)</h1>
        <GameBoxSliders />
        <h1>Composition (Classwork)</h1>
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