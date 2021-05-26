import { SORT_PRICE_UP, SORT_PRICE_DOWN, GET_BOOKS_FROM_SERVER, RANDOM, SELECTED_BOOKS_FILTER } from '../constants'
import { v4 as uuidv4 } from 'uuid';
import Book from "../components/Book";


const bookReducer = (state, action) => {
    switch (action.type) {

        case SELECTED_BOOKS_FILTER: //selected by type
            if (action.payload.value !== 0) {
                return action.payload.allBooks.filter(book => book.type === action.payload.value);
            } else if (action.payload.value === 0) { //jeigu nepasirinktos selecte knygos - grazina visas knygas
                return action.payload.allBooks;
            }

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