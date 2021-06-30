import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const mapStateToProps = state => {
    return {
        //atsiranda trainsReducer del to, kad isskiria musu reducerius. jeigu naudojamas vienas basicReducer, tada trainsReducer istrinti!

        trains: state.trainsReducer.trains
    }
}

const Trains = ({ trains }) => {

    return (
        <ul>
            {trains.map(vagon => (<li key={uuidv4()}>{vagon.type}{vagon.long}</li>))}
        </ul>
    )
}

const BasicTrain = connect(mapStateToProps)(Trains);
export default BasicTrain;