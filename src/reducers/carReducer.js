import { CHANGE_BRAND, MAKE_BLACK, MAKE_BROWN } from "../constants";

const carReducer = (state, action) => { //TURI KAZKA GRAZINTI !!! //state - cars, action - type ir payload is dispatch
    switch (action.type) {
        case MAKE_BLACK:
            return state.map(car => {
                if (car.id === action.payload.id) {
                    return { ...car, color: 'black' };
                } else {
                    return car;
                }
            });
        case MAKE_BROWN:
            return state.map(car => {
                if (car.id === action.payload.id) {
                    return { ...car, color: 'brown' };
                } else {
                    return car;
                }
            });
        case CHANGE_BRAND:
            return state.map(car => {
                if (car.id === action.payload.id) {
                    return { ...car, brand: action.payload.brand };
                } else {
                    return car;
                }
            });
        default: return state;
    }
}

export default carReducer;