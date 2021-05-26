import euroCoin from '../images/euro.svg';

const Money = props => {

    return (
        <div className="cash">
            <span className='money'>{props.money} &euro;</span>
            <span className='title'>PINIGAI</span>
            <span className='alignCenter'>
                <img className='euroImg' src={euroCoin} onClick={props.plusOneMoney}></img>
                <span className="plusOneButton">+1</span>
            </span>
        </div>
    )
}

export default Money;