import { SORT_PRICE_UP, SORT_PRICE_DOWN, GET_BOOKS_FROM_SERVER, RANDOM, SELECTED_BOOKS_FILTER, CHANGE_ITEMS_PER_PAGE, SET_ACTIVE_PAGE } from '../constants';


const bookReducer = (state, action) => {
    switch (action.type) {

        case SELECTED_BOOKS_FILTER: //selected by type

            if (action.payload.value !== 0) {
                return {
                    showBooks: state.allBooks.filter(book => book.type === action.payload.value),
                    allBooks: state.allBooks,
                    activePage: state.activePage
                }
            } else if (action.payload.value === 0) { //jeigu nepasirinktos selecte knygos - grazina visas knygas
                return {
                    showBooks: state.allBooks.slice(0, action.payload.itemsPerPage),
                    allBooks: state.allBooks,
                    activePage: 1 
                }
            }
            break;
        case RANDOM:

            return {
                showBooks: [].concat(state.allBooks).sort(() => Math.random() - 0.5).slice(0, action.payload.itemsPerPage),
                allBooks: state.allBooks,
                activePage: state.activePage
            }

        case GET_BOOKS_FROM_SERVER: //vieta, kuri pagal puslapiavima nurodys iskart kiek elementu rodyti

            return {
                showBooks: action.payload.allBooks.slice(0, action.payload.itemsPerPage),
                allBooks: action.payload.allBooks,
                activePage: 1 //atvaizduojame pirmo puslapio booksus, kai uzsikrauna puslapis
            };

        case SORT_PRICE_UP:
            let sortedUp = state.allBooks.sort((a, b) => a.price > b.price ? 1 : -1);
            return {
                showBooks: [].concat(sortedUp).slice(
                    (state.activePage - 1) * action.payload.itemsPerPage,
                    state.activePage * action.payload.itemsPerPage
                ),
                allBooks: sortedUp,
                activePage: state.activePage
            }


        case SORT_PRICE_DOWN:
            let sortedDown = state.allBooks.sort((a, b) => a.price < b.price ? 1 : -1);
            return {
                showBooks: [].concat(sortedDown).slice(
                    (state.activePage - 1) * action.payload.itemsPerPage,
                    state.activePage * action.payload.itemsPerPage
                ),
                allBooks: sortedDown,
                activePage: state.activePage
            }

        case CHANGE_ITEMS_PER_PAGE: //filtruoja tik tada, kai pasikeicia itemsPerPage state'as

            return {
                showBooks: [].concat(state.allBooks).slice(
                    0,
                    action.payload.itemsPerPage
                ),
                allBooks: state.allBooks,
                activePage: 1 //jeigu kazkas pakeite itemsPerPage ir mes buvome labai toli esanciame puslapyje, logiska butu ji nukelti i pirma puslapi
            }

        case SET_ACTIVE_PAGE: //filtruoja tada, kai pasikeite puslapis

            return {
                showBooks: [].concat(state.allBooks).slice(
                    (action.payload.activePage - 1) * action.payload.itemsPerPage,
                    action.payload.activePage * action.payload.itemsPerPage
                ),
                allBooks: state.allBooks,
                activePage: action.payload.activePage
            }



        default: return state;
    }
}

export default bookReducer;