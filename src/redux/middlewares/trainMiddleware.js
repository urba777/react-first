import { ADD_TRAIN } from "../constants";
import { selectMiddlewareTrains } from "../selects";

//VIDEO 2021.05.12 1:39:00
const trainMiddleware = store => next => action => {

    console.log(' trains store', selectMiddlewareTrains(store));

    if (action.type === ADD_TRAIN) {
        action.payload = { type: 'traukinio vagonas', long: Math.floor(Math.random() * 101) };
    }

    return next(action); //perduoda action kitam middleware

}

export default trainMiddleware;