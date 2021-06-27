import { ADD_SHIP, ADD_TRAIN } from "../constants"


export function addShip(payload) {
    return {
        type: ADD_SHIP,
        payload
    }
}

export function addTrain(payload) {
    return {
        type: ADD_TRAIN,
        payload
    }
}