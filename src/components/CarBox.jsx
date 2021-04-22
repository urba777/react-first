//***************************  NE REACT KODAS (PAPRASTAS JAVASCRIPT  *****************************************//

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
import { useEffect, useReducer, useState, useRef } from "react"; //useReducer
import carReducer from "../reducers/carReducer";
import { INIT_CARS, CHANGE_BRAND, DECREASE, INCREASE, MAKE_BLACK, MAKE_BROWN, SAVE_BRAND, ROLL_BACK } from "../constants"; //Konstantos

const CarBox = ({ boxStyle }) => {

    //cars yra "../shared/cars" - MASYVAS PAGR IS KUR TRAUKIAMI AUTOMOBILIAI
    const [cars, dispatch] = useReducer(carReducer, initCars); //kai initCars pirma karta pasileis, jis uzpildys cars
    const [number, setNumber] = useState(0);
    const [show, setShow] = useState('Show localStorage');
    const alreadyMounted = useRef(false);
    //carReducer - reducers folderyje
    //dispatch - susijes su carReducer, tai onClick perkels i ta f-cija ir pakeis viska

    //#1 - kiti numeriai eiliskumo carReducer'yje
    //naujas BRAND ipushinam newBrand i initCars masyva. Sita f-cija iskart suveikia uzsikrovus puslapiui, kadangi iskvieciama viena karta []
    useEffect(() => {

        dispatch({ type: INIT_CARS, payload: { newMakerInit: 'Please enter new brand' } });

        //Jeigu kazkas nutinka su localStorage ir update'inasi ne tame paciame, o kitame tab'e (langelyje narsykles)
        //Skirtas tarp TABų sužaisti
        window.addEventListener('storage', () => {
            console.log('STORAGE EVENT' + JSON.parse(window.localStorage.getItem('history')));
        });

        localStorage.setItem('count', 0);

        /////////LOCAL STORAGE ///////////////////////LOCAL STORAGE ///////////////////////LOCAL STORAGE ///////////////////////LOCAL STORAGE ////////////// 
        //kada uzsikrauna komponentas
        //komanda, kuri iraso i Local Storage viska
        //localStorage.setItem('animal', JSON.stringify({name: 'Makaka'})); //objektas stringo pavidalu laikinai
        localStorage.setItem('history', JSON.stringify([])); //objektas stringo pavidalu laikinai
        //localStorage.setItem('person', 'Peter');

        //localStorage.removeItem('animal'); //Istrina makaka

        //sitaip objektu deti negalime
        //localStorage.animal = 'makaka'; //KAIP OBJEKTAS sukurimas, sukuriame vel makaka per tašką . animal

        //delete localStorage.animal; // istrina KAIP OBJEKTA

        //konsoleje atspausdiname visus irasus
        //sitoks metodas yra BLOGAS!!!!!!!!!!!!!!!!!! Nes rodys visus properties
        //for(let key in localStorage) {
        //    console.log(key);
        //}

        //Kad rodytu tik viena property konkreciai ir nebutu setItem, getItem ir t.t.
        // for (let key in localStorage) {
        //     if (localStorage.hasOwnProperty(key)) {
        //         console.log(key);
        //     }
        // } 

        //NORMALUS localStorage yra carReducer.js

    }, []);

    useEffect(() => {

        if (alreadyMounted.current) {//antras jau veiksmas ir toliau

            let history = JSON.parse(localStorage.history);

            if (cars.history === 'new') {
                //issaugome history
                history.unshift(cars);
            } else if (cars.history === 'old'){
                //isimame history
                history.shift();
            }

            localStorage.setItem('history', JSON.stringify(history));
        }
        else {//pirmas paleidimas su useRef, KAD NEBUTU DVIEJU KARTU ir pavers i true useRef
            alreadyMounted.current = true;
        }

    }, [cars]); //pasikeitus cars suveiks

    const doSomething = () => {
        setNumber(number => number + 1);
        if (number % 2) {
            setShow('Show localStorage');
        } else {
            setShow('Hide localStorage');
        }
    }

    const showLocalStorage = () => {
        if (number % 2) {
            return localStorage.getItem('history');
        } else {
            return '';
        }
    }

    return (
        <>
            <table style={{ width: 800, border: 'none' }}>
                <div className='localStorage'>
                    {localStorage.getItem('person')}
                    <br></br>
                    {JSON.parse(localStorage.animal).name}
                    <button onClick={doSomething}>{show}</button>
                    {showLocalStorage()}
                    <h1>HISTORY:</h1>
                    <button onClick={() => dispatch({ type: ROLL_BACK })}>ROLL BACK</button>
                </div>
                <tr>
                    <th>ID</th>
                    <th>Brand</th>
                    <th>Color</th>
                    <th>Action</th>
                </tr>
                {cars.data.map(car =>
                    <tr key={car.id}>
                        <td>{car.id}</td>
                        <td style={boxStyle}>{car.brand}</td>
                        <td style={{ color: car.color, fontWeight: 'bold', textTransform: 'uppercase', backgroundColor: car.color }}></td>
                        <td className='inlineBox'>
                            <button onClick={() => dispatch({ type: MAKE_BLACK, payload: { id: car.id } })}>Make Black</button> {/* DISPATCHinam carReducer skirta objekta, isdispatchinam action objekta*/}
                            <button onClick={() => dispatch({ type: MAKE_BROWN, payload: { id: car.id } })}>Make Brown</button> {/* DISPATCHinam carReducer skirta objekta, isdispatchinam action objekta*/}
                            <input type='text' onChange={(event) => dispatch({ type: CHANGE_BRAND, payload: { id: car.id, brand: event.target.value } })} value={car.newBrand || ''}></input>
                            <button onClick={() => dispatch({ type: SAVE_BRAND, payload: { id: car.id } })}>Set Brand</button>
                        </td>
                    </tr>
                )}
            </table>
        </>
    );
}

export default CarBox;