import './SingleProduct.scss';
import RelatedProducts from './RelatedProducts/RelatedProducts';
import { FaCartPlus } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/fetchData';
import { useState } from 'react';

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { data } = useFetch(`/api/prdoucts?populate=*&[filters][id]=${id}`);

  if (!data) return;
  const product = data?.data?.[0]?.attributes;

  const decrement = () => {
    setQuantity((prevState) => {
      if (prevState === 1) return 1;
      return prevState - 1;
    });
  };

  const increment = () => {
    setQuantity((prevState) => prevState + 1);
  };

  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img
              src={
                process.env.REACT_APP_STRIPE_APP_DEV_URL +
                product.img.data[0].attributes.url
              }
              alt="product-img"
            />
          </div>
          <div className="right">
            <span className="name">{product.title}</span>
            <span className="price">&#8377;{product.price}</span>
            <span className="desc">{product.desc}</span>

            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span onClick={decrement}>-</span>
                <span>{quantity}</span>
                <span onClick={increment}>+</span>
              </div>

              <button className="add-to-cart-button">
                <FaCartPlus size={20} />
                ADD TO CART
              </button>
            </div>

            <span className="divider" />

            <div className="info-item">
              <span className="text-bold">
                Category:{' '}
                <span>{product.categories.data[0].attributes.title}</span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProducts
          productId={id}
          categoryId={product.categories.data[0].id}
        />
      </div>
    </div>
  );
};

export default SingleProduct;
