const BoxDigit = props => {// <---- irg komponentas
    return (
      <span style={props.boxStyle}>
        {props.number}
      </span>
    );
  }

  export default BoxDigit;