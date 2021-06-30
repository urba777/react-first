//kad gauti pranesima apie konkretu state
//VIDEO 2021.05.12 ~36min 
export const selectShips = state => state.ships;
export const selectTrains = state => state.trains;
export const selectMiddlewareTrains = store => store.getState().trainsReducer.trains;