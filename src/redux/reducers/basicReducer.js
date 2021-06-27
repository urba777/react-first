import { ADD_SHIP } from "../constants";

const initState = { trains: [{ type: 'idk who', long: '100' }], ships: [{ type: 'steam boat', long: '54' }] }; //traukiniai, laivai

const basicReducer = (state = initState, action) => {

    if (action.type === ADD_SHIP) {
        return Object.assign({}, state, { ships: state.ships.concat(action.payload) });
    }

    return state;
}

export default basicReducer;