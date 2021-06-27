import { createStore } from "redux";
import basicReducer from "../reducers/basicReducer";


//Šičia yra store, reducerio vardas skliausteliuose
const basic = createStore(basicReducer);



export default basic;