import { SORT_PRICE_UP, SORT_PRICE_DOWN, GET_BOOKS_FROM_SERVER, RANDOM } from '../constants'

const bookReducer = (state, action) => {
    switch (action.type) {

        case RANDOM:
            return [].concat(state).sort(() => Math.random() - 0.5);

        case GET_BOOKS_FROM_SERVER:
            return action.payload;

        case SORT_PRICE_UP:
            return [].concat(state).sort((a, b) => a.price > b.price ? 1 : -1);

        case SORT_PRICE_DOWN:
            return [].concat(state).sort((a, b) => a.price < b.price ? 1 : -1);

        default: return state;
    }
}

export default bookReducer;