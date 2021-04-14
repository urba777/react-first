import { Component } from 'react';

class GameBox extends Component { //tevinis

    constructor(){
      super();
      this.state = {
        color: 'white',
      }
    } 
  
    render() {
      //console.log('RENDER <--- ClasicBox')
      return(
        <div className="boxGame" style={{borderColor:this.state.color}}>
          {this.props.children}
        </div>
      )
    }
  }

  export default GameBox; //tevinis