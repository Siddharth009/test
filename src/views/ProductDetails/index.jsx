/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import cartActions from '@Actions/cart';
import { useParams, Link } from 'react-router-dom';
import allProducts from '@Assets/data/productData';
import './style.scss';

/**
 * @author
 * @function ProductDetails
 * */

const ProductDetails = (props) => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { addProductToCart } = cartActions;

  useEffect(() => {
    // eslint-disable-next-line eqeqeq
    const productDetail = allProducts.find((item) => Number(item.id) === Number(id));
    if (productDetail) setProduct(productDetail);
  }, [id]);
  return (
    <div className="container align-items-center">
      <Link to="/" className="is-back" id="back">
        <i className="arrow alternate circle left outline icon" />
        <span>Back to all Products</span>
      </Link>
      <h1 className="display-1 font-weight-bold">{product?.name || 'Product name N/A'} </h1>
      <div className="product-banner">
        <figure>
          <img src={product?.image} alt="product" />
        </figure>
      </div>
      <div className="product-info">
        <div className="price">
          <p>
            Price: Rs.<span>{product?.price || 'N/A'}</span>
          </p>
          <div className="alert alert-info" role="alert">
            Offer : <span>{product?.offer || 'No offer is available for this product.'}</span>
          </div>
        </div>
        <div className="add-to-cart">
          <button
            className="btn btn-primary"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              dispatch(addProductToCart(product));
            }}
          >
            Add to Cart
          </button>
        </div>
        <div className="info">
          <h4>Product Description </h4>
          <p>{product?.info || 'Product description not available'}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
