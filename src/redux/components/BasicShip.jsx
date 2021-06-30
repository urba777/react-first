import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const mapStateToProps = state => {
    return {
        //atsiranda shipsReducer del to, kad isskiria musu reducerius. jeigu naudojamas vienas basicReducer, tada shipsReducer istrinti!
        ships: state.shipsReducer.ships
    }
}

const Ships = ({ ships }) => {

    return (
        <ul>
            {ships.map(boat => (<li key={uuidv4()}>{boat.type}{boat.long}</li>))}
        </ul>
    )
}

//redux vieta. Paima fcija ir sujungia su Ships
const BasicShip = connect(mapStateToProps)(Ships);
export default BasicShip;