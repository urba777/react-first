import Green from './Green';
import Brown from './Brown';

const ColorHolder = props => {

    // if (props.showColor === 1) {
    //     return (
    //         <Green />
    //     );
    // }
    // return (
    //     <Brown />
    // );


    //kitas variantas
    let colorComponent = (props.showColor === 1) ? <Green /> : <Brown />;

    return(
        <>{colorComponent}</>
    );
    


}

export default ColorHolder;