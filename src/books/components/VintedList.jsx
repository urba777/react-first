// import { v4 as uuidv4 } from 'uuid';
import VintedProduct from "./VintedProduct";

const VintedList = ({ errorProducts, vintedDispatch, vinted }) => {



    return (
        <>
            <h1 style={{ color: 'red' }}>{errorProducts}</h1>
            <ul className='booksList'>
                {
                    vinted.news.map((product) => <VintedProduct key={product.id} productId={product.id} vintedDispatch={vintedDispatch} vinted={vinted}></VintedProduct>)
                }
            </ul>
        </>
    );
}

export default VintedList;