import { Component } from 'react';
import GameBox from './GameBox';
import { Slider } from 'rsuite';
import GameBoxBall from './GameBoxBall';
import React, { useState } from 'react';

const GameBoxSliders = () => { //vaikinis

  const [xValue, setXValue] = useState(0);
  const [yValue, setYValue] = useState(0);
  const [colorBall, setcolorBall] = useState('orange');
  const [score, setScore] = useState(0);

  const onChangeX = (value) => {
    setXValue(value); 
    if (value > 370 && value < 390 && yValue > 390 && yValue < 406){
      setXValue(0); 
      setYValue(0); 
      setScore(previousScore => previousScore + 1);
    }
  }

  const onChangeY = (value) => {
    setYValue(value);
    if (value > 390 && value < 406 && xValue > 370 && xValue < 390){
      setXValue(0); 
      setYValue(0);
      setScore(previousScore => previousScore + 1);
    }
  }


    return (
      <>
        <div className='inlineBox'>
          <div className="sliders">
            <GameBoxBall 
              x={xValue}
              y={yValue}
              colors={colorBall}
            />
          </div>
          <GameBox> {/** TEVINIS -> GameBox */}
            <div className="sliders">
              <h1>X</h1>
              <Slider style={{ width: 200, backgroundColor: 'red' }} value={xValue} defaultValue={xValue} max={450} onChange={onChangeX}/>
              <h1>Y</h1>
              <Slider style={{ width: 200, backgroundColor: 'red' }} value={yValue} defaultValue={yValue} max={450} onChange={onChangeY}/>
              <br></br>
              {<h1 className='score'>SCORE: {score}</h1>}
            </div>
          </GameBox>
        </div>
      </>
    )
}

export default GameBoxSliders; //vaikinis

/* import { Component } from 'react';
import GameBox from './GameBox';
import { Slider } from 'rsuite';
import GameBoxBall from './GameBoxBall';

class GameBoxSliders extends Component { //vaikinis

  constructor() {
    super();
    this.state = {
      xValue: 0,
      yValue: 0,
      colorBall: 'orange',
      score: 0,
      goal: '',
    }
  }
  onChangeX = (value) => {
    this.setState({ xValue: value })
    if (value > 370 && value < 390 && this.state.yValue > 390 && this.state.yValue < 406){
      this.setState({ xValue: 0, yValue: 0, score: this.state.score + 1 })
    }
  }

  onChangeY = (value) => {
    this.setState({ yValue: value })
    if (value > 390 && value < 406 && this.state.xValue > 370 && this.state.xValue < 390){
      this.setState({ xValue: 0, yValue: 0, score: this.state.score + 1 })
    }
  }

  render() {
    return (
      <>
        <div className='inlineBox'>
          <div className="sliders">
            <GameBoxBall 
              x={this.state.xValue}
              y={this.state.yValue}
              colors={this.state.colorBall}
            />
          </div>
          <GameBox>
            <div className="sliders">
              <h1>X</h1>
              <Slider style={{ width: 200, backgroundColor: 'red' }} value={this.state.xValue} defaultValue={this.state.xValue} max={450} onChange={this.onChangeX}/>
              <h1>Y</h1>
              <Slider style={{ width: 200, backgroundColor: 'red' }} value={this.state.yValue} defaultValue={this.state.yValue} max={450} onChange={this.onChangeY}/>
              <br></br>
              {<h1 className='score'>SCORE: {this.state.score}</h1>}
            </div>
          </GameBox>
        </div>
      </>
    )
  }
}

export default GameBoxSliders; //vaikinis
*/