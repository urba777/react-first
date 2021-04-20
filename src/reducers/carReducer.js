import { CHANGE_BRAND, INIT_CARS, MAKE_BLACK, MAKE_BROWN, SAVE_BRAND } from "../constants";

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
        //#2
        case INIT_CARS:
            return state.map(car => {
                return { ...car, newBrand: action.payload.newMakerInit }; //priskirs newBrand i masyva
            });
        //CHANGE BRAND IR SAVE BRAND CIA DU SVARBUS ZINGSNIAI. Vienas padaro newBrand, o kitas paspaudus mygtuka jau padaro SAVE is to change
        //#3
        case CHANGE_BRAND:
            return state.map(car => {
                if (car.id === action.payload.id) {
                    return { ...car, newBrand: action.payload.brand };
                } else {
                    return car;
                }
            });
        //#4
        case SAVE_BRAND:
            return state.map(car => {
                if (car.id === action.payload.id) {
                    return { ...car, brand: car.newBrand };
                } else {
                    return car;
                }
            });
        default: return state;
    }
}



export default carReducer;