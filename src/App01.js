import './App.css';
import {Component} from 'react';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function BoxOne() {// <---- irg komponentas
  return (
    <div className="box">1</div>
  );
}

const BoxTwo = () => {// <---- irg komponentas
  return (
    <div className="box">2</div>
  );
}

const BoxThree = () => {// <---- irg komponentas
  return (
    <div className="box">3</div>
  );
}

const BoxRandom = () => {// <---- irg komponentas
  return (
    <div className="box">
      <span style={fancyStyle}>
        {getRandomInt(10)}
      </span>
    </div>
  );
}

const fancyStyle = {
  fontSize: '300%',
  color: 'yellow'
}

const normalStyle = {
  fontSize: '100%',
  color: 'white'
}


const BoxUniversalum = props => {// <---- irg komponentas
  return (
    <div className="box" style={{borderColor:props.color}}>
      <BoxDigit number={props.number} boxStyle={props.boxStyle} />
    </div>
  );
}




const BoxDigit = props => {// <---- irg komponentas
  return (
    <span style={props.boxStyle}>
      {props.number}
    </span>
  );
}

class ClasicBox extends Component {

  constructor(){
    super();
    this.state = {
      clock: new Date(),
      color: 'white'
    }
    console.log('CONSTRUCT')
    // this.doClick = this.doClick.bind(this); //<----- pririsam funkcija
  }

  componentDidMount() {
    console.log('MOUNT')
    this.timerID = setInterval(()=>this.ticTac(), 100000);
  }

  componentWillUnmount() {
    console.log('UNMOUNT')
    clearInterval(this.timerID);
  }

  ticTac() {
    console.log('TIC-TAC')
    this.setState({clock: new Date()});
  }

  // doClick() {
  //   console.log('Hello!', this)
  //   this.setState({color: 'red'});
  // }

  doClick1 = () => {
    // console.log('Hello!', this.setState.color)
    if(this.state.color === 'red') {
      this.setState({color: 'white'});
    }
    else {
      this.setState({color: 'red'});
    }
  }
  doClick2 = () => {
    // console.log('Hello!', this.setState.color)
    if(this.state.color === 'pink') {
      this.setState({color: 'orange'});
    }
    else {
      this.setState({color: 'pink'});
    }
  }

  doClick3 = (color) => {
      this.setState({color: color});
  }


  render() {
    console.log('RENDER')
    return(
      <div className="box" style={{borderColor:this.state.color}}>
        <BoxDigit boxStyle={normalStyle} number={this.state.clock.toLocaleTimeString()}/>
        <button className="myButton" onClick={() => this.doClick3('red')}>MAKE RED</button>
        <button className="myButton" onClick={() => this.doClick3('green')}>MAKE GREEN</button>
      </div>
    )
  }
}

function App() { // <---- komponentas
  return (
    <div className="App">
      <header className="App-header">
        <BoxUniversalum color={'yellow'} number={3} boxStyle={normalStyle} />
        <BoxUniversalum color={'green'} number={getRandomInt(10)} boxStyle={fancyStyle} />
        <ClasicBox color={'yellow'} />
      </header>
    </div>
  );
}

export default App;
