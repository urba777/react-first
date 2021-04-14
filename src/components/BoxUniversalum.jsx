import BoxDigit from './BoxDigit';

const BoxUniversalum = props => {// <---- irg komponentas
    return (
      <div className="box" style={{borderColor:props.color}}>
        <BoxDigit number={props.number} boxStyle={props.boxStyle} />
      </div>
    );
  }

  export default BoxUniversalum;