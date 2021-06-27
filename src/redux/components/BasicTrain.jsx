import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const mapStateToProps = state => {
    return {
        trains: state.trains
    }
}

const Trains = ({ trains }) => {

    return (
        <ul>
            {trains.map(train => (<li key={uuidv4()}>{train.type}{train.long}</li>))}
        </ul>
    )
}

const BasicTrain = connect(mapStateToProps)(Trains);
export default BasicTrain;