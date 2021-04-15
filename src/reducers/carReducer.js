import { MAKE_BLACK, MAKE_BROWN } from "../constants";

const carReducer = (state, action) => { //TURI KAZKA GRAZINTI !!!
    switch (action.type) {
        case MAKE_BLACK:
            return state.map(car => {
                if (car.id === action.payload.id) {
                    return {...car, color: 'black'};
                } else {
                    return car;
                }
            });
        case MAKE_BROWN:
            return state.map(car => {
                if (car.id === action.payload.id) {
                    return {...car, color: 'brown'};
                } else {
                    return car;
                }
            });
        default: return state;
    }
    return state;
}

export default carReducer;