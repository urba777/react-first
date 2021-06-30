//VIDEO 2021.05.12 1:39:00
const loggerMiddleware = store => next => action => {

    console.log('loooogeeer: ', action);

    //perduoda action kitam middleware
    return next(action);

}

export default loggerMiddleware;