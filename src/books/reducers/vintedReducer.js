import { GET_NEWS_FROM_SERVER, ADD_PRODUCT_FROM_SERVER } from '../constants';


const vintedReducer = (state, action) => {
    switch (action.type) {


        case GET_NEWS_FROM_SERVER: //vieta, kuri pagal puslapiavima nurodys iskart kiek elementu rodyti

            return {
                news: action.payload,
                products: state.products
            };

        case ADD_PRODUCT_FROM_SERVER:
            const products = [].concat(state.products);
            products.push(action.payload);
            return {
                news: state.news,
                products: products
            }


        default: return state;
    }
}

export default vintedReducer;