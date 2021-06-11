import { useEffect } from "react";
import { ADD_PRODUCT_FROM_SERVER } from '../constants';
import API2 from '../../vinted/shared/productsAPI';
import like from '../../vinted/images/like.svg';
import Loading from "./Loading";

const VintedProduct = ({ productId, vintedDispatch, vinted }) => {

    useEffect(() => {
        API2.get('products/' + productId)
            .then(response => {
                vintedDispatch({ type: ADD_PRODUCT_FROM_SERVER, payload: response.data });
                // console.log(response.data,'getting product')
            })
            .catch(error => {
            })
    }, [productId]);

    if (vinted.products.filter(product => product.id === productId).length) {
        const product = vinted.products.filter(product => product.id === productId)[0]; //kad eitu parodyti info, kuri su news ID ir produkto ID susiję
        console.log('produktas', product)
        return (
            <div className="saleBox">
                <a href="#">
                    <div className="user">
                        <img className="userAvatar" src=''></img>
                        <h6>{product.id}</h6>
                    </div>
                </a>
                <img className="saleImageMain" src={product.img[product.main_img]}></img>
                <div className="saleInfo">
                    <div className="flexCenterSpaceBetween">
                        <h3 className="price">{product.price} &euro;</h3>
                        <div className="flexCenterSpaceBetween likeAndNumberOfLikes">
                            <img src={like}></img>
                            <h6>7</h6>
                        </div>
                    </div>
                    <h6 className="sizeAndBrand">
                        {(product.size) ? product.size[0] : ''}
                        {((product.size) && product.size[0] && product.size[1]) ? ' / ' : ''}
                        {(product.size) ? product.size[1] : ''}
                        {(product.size) && (product.size[1] && product.size[2]) ? ' / ' : ''}
                        {(product.size) ? product.size[2] : ''}
                    </h6>
                    <h6 className="sizeAndBrand">{ }</h6>
                </div>
            </div>
        );
    } else {
        return (
            <div className="saleInfo">
                <span><Loading /></span>
            </div>)
    }
}

export default VintedProduct;