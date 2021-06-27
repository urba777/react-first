import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const mapStateToProps = state => {
    return {
        ships: state.ships
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