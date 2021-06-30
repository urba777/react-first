import { ADD_TRAIN } from "../constants";

const initState = { trains: [{ type: 'idk who', long: '100' }] }; //traukiniai

const trainsReducer = (state = initState, action) => {


    if (action.type === ADD_TRAIN) {
        return Object.assign({}, state, { trains: state.trains.concat(action.payload) });
    }

    return state;
}

export default trainsReducer;