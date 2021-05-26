import API from '../shared/productsAPI';
import { useContext, useEffect, useRef, useState } from 'react';
import like from '../images/like.svg';

const NewsProduct = ({ productId }) => {
    const [product, setProduct] = useState([]);
    const [productImages, setProductImages] = useState([]);
    const [productMainImage, setProductMainImage] = useState('');
    const [user, setUser] = useState([]);
    const [brand, setBrand] = useState([]);

    useEffect(() => {
        // console.log('START PRODUCTS');

        API.get('/products/' + parseInt(productId))
            .then(response => {
                // console.log(response.data);
                setProduct(response.data);
            })
            .catch(error => {

            })

    }, []);

    useEffect(() => {
        if (product.img) {
            setProductImages(product.img);
        }
        if (product.user) {
            API.get('/users/' + product.user)
                .then(response => {
                    // console.log(response.data);
                    setUser(response.data);
                })
                .catch(error => {

                })
        }
        if (product.brand) {
            API.get('/brands/all')
                .then(response => {
                    console.log(response.data,'brands');
                    setBrand(response.data);
                })
                .catch(error => {

                })
        }
    }, [product]);

    useEffect(() => {
        setProductMainImage(productImages[product.main_img]);
    }, [productImages]);

    if (!productMainImage) {
        setProductMainImage('https://www.pngkey.com/png/full/866-8669429_800-x-800-2-loading-clipart.png');
    }

    return (
        <>
            <div className="saleBox">
                <a href="#">
                    <div className="user">
                        <img className="userAvatar" src=''></img>
                        <h6>{(product.user) ? user.name : '?'}</h6>
                    </div>
                </a>
                <img className="saleImageMain" src={productMainImage}></img>
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
                    <h6 className="sizeAndBrand">{((brand) && brand.id === product.brand) ? brand.title : brand.title}</h6>
                </div>
            </div>
        </>
    );
}

export default NewsProduct;