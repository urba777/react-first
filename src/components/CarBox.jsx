//***************************NE REACT KODAS (PAPRASTAS JAVASCRIPT*****************************************//

// const counterReducer = (count, actionPlus1) => { //sita f-cija jau galime vadinti reduceriu
//     return count + 1; //NIEKO NEMODIFIKUOJA, BET GRAZINA modikuota kopija
// }


// const counterReducer = (count, action) => { //sita f-cija jau galime vadinti reduceriu
//     if (action.type === 'INCREASE') {
//         return count + 1; //NIEKO NEMODIFIKUOJA, BET GRAZINA modikuota kopija
//     } else if (action.type === 'DECREASE') {
//         return count - 1; //NIEKO NEMODIFIKUOJA, BET GRAZINA modikuota kopija
//     }
//     return count; //jeigu nei toks, nei toks, graziname tiesiog count <--- REDUCERIS TURI KAZKA GRAZINT, kas tampa nauju state 
// }

//********************************************************************//

//const action = {tipas: 'INCREASE', payload: 5};

// const counterReducer = (state, action) => {
//     switch (action.tipas) {
//         case INCREASE : return {...state, count: state.count + 1}; //...state spread // INCREASE DECREASE IS constantu atkeliavo
//         case DECREASE : return {...state, count: state.count - 1}; // INCREASE DECREASE IS constantu atkeliavo
//         default : return state;
//     }
// }

// const counterReducer = (state, action) => {
//     switch (action.tipas) {
//         case INCREASE : return {...state, count: state.count + action.payload}; //...state spread // INCREASE DECREASE IS constantu atkeliavo, jei butu klaidingai parasytas zodis, iskart klaida atrastu
//         case DECREASE : return {...state, count: state.count - action.payload}; // INCREASE DECREASE IS constantu atkeliavo, jei butu klaidingai parasytas zodis, iskart klaida atrastu
//         default : return state;
//     }
// }

// const state = {count: 0};




///REACT KODAS  <--------------------------------------------------------------------------------- useReducer

import initCars from "../shared/cars";
import { useReducer } from "react"; //useReducer
import carReducer from "../reducers/carReducer";
import { CHANGE_BRAND, DECREASE, INCREASE, MAKE_BLACK, MAKE_BROWN } from "../constants"; //Konstantos

const CarBox = ({ boxStyle }) => {

    const [cars, dispatch] = useReducer(carReducer, initCars); //kai initCars pirma karta pasileis, jis uzpildys cars
    //carReducer - reducers folderyje
    //dispatch - susijes su carReducer, tai onClick perkels i ta f-cija ir pakeis viska
    return (
        <>
            <table style={{ width: 800 }}>
                <tr>
                    <th>ID</th>
                    <th>Brand</th>
                    <th>Color</th>
                    <th>Action</th>
                </tr>
                {cars.map(car =>
                    <tr key={car.id}>
                        <td>{car.id}</td>
                        <td style={boxStyle}>{car.brand}</td>
                        <td style={{ color: car.color, fontWeight: 'bold', textTransform: 'uppercase', backgroundColor: car.color }}></td>
                        <td>
                            <button onClick={() => dispatch({type: MAKE_BLACK, payload: {id: car.id}})}>Make Black</button> {/* DISPATCHinam carReducer skirta objekta, isdispatchinam action objekta*/}
                            <button onClick={() => dispatch({type: MAKE_BROWN, payload: {id: car.id}})}>Make Brown</button> {/* DISPATCHinam carReducer skirta objekta, isdispatchinam action objekta*/}
                            <input type='text' onChange={(event) => dispatch({ type: CHANGE_BRAND, payload: {id: car.id, brand: event.target.value}})} value={car.brand}></input>
                            <button>Set Brand</button>
                        </td>
                    </tr>
                )}
            </table>
        </>
    );
}

export default CarBox;