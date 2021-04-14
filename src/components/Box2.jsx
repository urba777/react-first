import { Component } from 'react';
import {roll} from '../functions';
import Box from './Box';

class Box2 extends Component {

    constructor(){
      super();
      this.state = {
        color: 'green',
        number: 1,
      }
      console.log('CONSTRUCT <--- ClasicBox')
    }
  
    render() {
      console.log('veikia')
      return(
        <div className="box" style={{borderColor:this.state.color}}>
          {this.props.num}
        </div>
      )
    }
  }

  export default Box2;