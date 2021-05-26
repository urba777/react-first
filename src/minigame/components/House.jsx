import { useEffect, useState } from "react";

const House = props => {

    const [bgColor, setBgColor] = useState('red');

    useEffect(() => {
        if (props.money >= props.price) {
            setBgColor('green');
        } else if (props.money < props.price) {
            setBgColor('red');
        }
    }, [props.money]);

    const pelnas = () => {
        if (props.sum === 0) {
            return '0';
        } else {
            return props.earnings;
        }
    }


    return (
        <div className='box'>
            <h1>{props.name}. Kaina: {props.price}</h1>
            <h1>Duoda pelno: {props.gives} &euro;/s</h1>
            <h1>Viso pastatų: {props.sum}</h1>
            <h1>Sukauptas pelnas: {pelnas()}</h1>
            <button onClick={props.buyAppartment} style={{ backgroundColor: bgColor }} className='myButton'>BUY</button>
        </div>
    )
}

export default House;