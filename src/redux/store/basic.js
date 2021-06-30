import { applyMiddleware, combineReducers, createStore } from "redux";
import loggerMiddleware from "../middlewares/loggerMiddleware";
import trainMiddleware from "../middlewares/trainMiddleware";
// import basicReducer from "../reducers/basicReducer";
import shipsReducer from "../reducers/shipsReducer";
import trainsReducer from "../reducers/trainsReducer";


//daugiau reduceriu (reduxo pacio metodas) i viena reduceri leidzia sukombinuoti daugiau reduceriu:
//video: 2021.05.12 01:02:40++
const basicReducer = combineReducers({
    trainsReducer,
    shipsReducer
});

//Šičia yra store, reducerio vardas skliausteliuose
//sitame store negalime daugiau negu vieno reducerio naudoti
//
const basic = createStore(basicReducer, 
    applyMiddleware(
        trainMiddleware,
        loggerMiddleware
        ) //prijungiame middleWare VIDEO 2021.05.12 01:37:00
    );





export default basic;