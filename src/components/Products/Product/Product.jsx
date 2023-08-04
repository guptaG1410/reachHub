import "./Product.scss";
import product from '../../../assets/products/earbuds-prod-2.webp'

const Product = () => {
    return (
        <div className="product-card">
            <div className="thumbnail">
                <img src={product} alt="product-img" />
            </div>
            <div className="prod-details">
                <span className="name">Product Name</span>
                <span className="price">&#8377;599</span>
            </div>
        </div>
        );
};

export default Product;
