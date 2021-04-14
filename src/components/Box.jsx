import { Component } from 'react';
import {roll} from '../functions'
import Box2 from './Box2';
import ColorButton from './ColorButton';

class Box extends Component {

    constructor(){
      super();
      this.x = 0;
      this.state = {
        number: 0,
        color: 'yellow',
      }
    }
clickas = (y) => {
  let x = roll(y);
  this.setState({number: x});
}
  
    render() {
      return(
        <div className="inline">
          <ColorButton title={'Roll'} actionMethod={this.clickas}>{this.props.text} {this.state.number}</ColorButton>
          <Box2 num={this.state.number}></Box2>
        </div>
      )
    }
  }

  export default Box;