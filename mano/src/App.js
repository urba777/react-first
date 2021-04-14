import './App.css';

const randomNumber = (max) => { // -- funkcija
  return Math.floor(Math.random() * Math.floor(max));
}

///////STILIAI////////////
const fancyColor = {
  color: 'yellow',
  fontSize: '200%'
}

const twoColor = {
  color: 'green',
  fontSize: '150%;'
}

const normalusStilius = {
  color: '#fff',
  fontSize: '100%;'
}


/////////////KOMPONENTAI//////////////

function BoxOne() { // -- Komponentas
  return (
    <div className='box'>1</div>
  );
}

const BoxTwo = () => { // -- Komponentas
  return (
    <div className='box' style={twoColor}>Two</div>
  );
}

const BoxThree = () => { // -- Komponentas
  return (
    <div className='box'>3</div>
  );
}

const BoxRandom = () => { // -- Komponentas
  return (
    <div className='box'>
      <span style={fancyColor}>{randomNumber(100)}</span>
    </div>
  );
}

//////////PROPSAI//////////

const BoxDigit = props => {
  return (
    <span style={props.boxStyle}>{props.number}</span>
  );
}

const BoxUniversalus = props => {
  return (
    <div className='box' style={{borderColor:props.borderColor}}><BoxDigit number={props.number} boxStyle={props.boxStyle}/></div>
  );
}

/////////MAIN////////

function App() { // -- Komponentas
  return (
    <div className="App">
      <header className="App-header">
        <BoxUniversalus borderColor={'yellow'} number={1} boxStyle={normalusStilius}></BoxUniversalus>
        <BoxUniversalus borderColor={'green'} number={2} boxStyle={twoColor}></BoxUniversalus>
        <BoxUniversalus borderColor={'red'} number={3} boxStyle={normalusStilius}></BoxUniversalus>
        <BoxUniversalus borderColor={'white'} number={randomNumber(100)} boxStyle={fancyColor}></BoxUniversalus>
      </header>
    </div>
  );
}

export default App;
