import { Component, useState } from 'react';
import GameBox from './GameBox';
import ball from '../images/ball.svg'

const GameBoxBall = props => { //vaikinis

    const [color, setColor] = useState('white');
  
      return(
        <div className="boxGame ballBox" style={{borderColor:color}}>
          <div className='ball' style={{top: props.y, left: props.x, backgroundColor: props.colors}}><img className='ball' src={ball}></img></div>
          <div className='basket' style={{top: 395, left: -64, borderColor: color}}></div>
        </div>
      )
  }

  export default GameBoxBall; //vaikinis