import { useParams } from "react-router";

const VintedProductPage = ({ vinted }) => {


    const {id} = useParams();

    const product = vinted.products.find(product => product.id === parseInt(id));


    return (
        <div style={{ margin: 'auto' }} className="full-product">
            {
                product.img.map(src => <img key={src} src={src}></img>)
            }
            <div>
                <h3>{product.title}</h3>
            </div>
        </div>
    )
}

export default VintedProductPage;