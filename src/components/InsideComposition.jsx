import { Component } from 'react';
import Composition from './Composition';

const InsideComposition = props => {
  
      //console.log('RENDER <--- ClasicBox')
      return(
        <Composition>
           <h1>{props.title}</h1> {/* sita propsas Composition atspausdina kaip vaika {this.props.children}  */}
           <span className="africa">{props.text}</span>
        </Composition>
      )
    }

  export default InsideComposition; //vaikinis