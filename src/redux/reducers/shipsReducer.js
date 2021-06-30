import { ADD_SHIP } from "../constants";

const initState = { ships: [{ type: 'steam boat', long: '58' }] }; //laivai

const shipsReducer = (state = initState, action) => {

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

    return state;
}

export default shipsReducer;