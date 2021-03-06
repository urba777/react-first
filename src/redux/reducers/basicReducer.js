import { ADD_SHIP, ADD_TRAIN } from "../constants";

const initState = { trains: [{ type: 'idk who', long: '100' }], ships: [{ type: 'steam boat', long: '54' }] }; //traukiniai, laivai

const basicReducer = (state = initState, action) => {

    if (action.type === ADD_SHIP) {
        //paaskinimas VIDEO 2021.05.12 00:07:00
        //targetas - tuscias objektas. tada state perkeliamas i tuscia objekta
        return Object.assign({}, state, { ships: state.ships.concat(action.payload) });

        //dar galima taip:
        // return {
        //     trains: state.trains,
        //     ships: state.ships.concat(action.payload)
        // }
    }

    else if (action.type === ADD_TRAIN) {
        return Object.assign({}, state, { trains: state.trains.concat(action.payload) });
    }

    return state;
}

export default basicReducer;