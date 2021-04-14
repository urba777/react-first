import { Component } from 'react';
import React, { useState } from 'react';

const Composition = props => { //tevinis

  const [color, setColor] = useState('#ccff00');


  return (
    <>
      <div className="box" style={{ borderColor: color }}>
        {props.children}
        <button className="myButton" onClick={() => {
          if (color != 'red') {
            setColor('red')
          }
          else {
            setColor('#ccff00')
          }
        }
        }></button>
      </div>
    </>
  )
}

export default Composition; //tevinis