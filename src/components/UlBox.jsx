import { Component } from 'react';

import Li from './Li';
import ListButton from './ListButton';
import { digits, letters } from '../shared/ul';
import { v4 as uuidv4 } from 'uuid'; //Isimame is bibliotekas uuidv4()


class UlBox extends Component {

  constructor() {
    super();
    this.state = {
      color: 'white',
      list: letters //------------------------------letters prijungta
    }
    console.log('CONSTRUCT <--- ClasicBox')
  }

  doSort = (method) => {
    console.log(method);

    const list = this.state.list;

    if (method === 'sort') {
      this.setState({
        list: list.sort((a, b) => a.d > b.d ? 1 : -1)
      })
    }

    if (method === 'unsort') {
      this.setState({
        list: list.sort(() => Math.random() > 0.5 ? -1 : 1)
      })
    }

  }

  render() {
    console.log('RENDER <--- ClasicBox')
    return (
      <>
        <div className="inlineBox">
          <ul className="box" style={{ borderColor: this.state.color }}>
            {/* {
                digits.map(digit => <Li key = {digit.id} li={digit.d}/>)
            } */}
            {
              this.state.list.map(letter => <Li key={uuidv4()} li={letter.d} />) //cia reikia key uuidv4() unikalus arba letter.id
            }
          </ul>
          <div className='box'>
            <ListButton sortMethod={this.doSort} action={'sort'} name={'SORT'} />
            <ListButton sortMethod={this.doSort} action={'unsort'} name={'RANDOM'} />
          </div>
        </div>
      </>


    )
  }
}

export default UlBox;