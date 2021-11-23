/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './style.scss';
import { productTitleToUrl } from '@src/utils/commonUtils';
import cartActions from '@Actions/cart';

/**
 * @author
 * @function ProductCard
 * */

const ProductCard = ({ product, product: { id, name, price, image, hero, detail, offer } }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { addProductToCart } = cartActions;
  return (
    <div
      className="product-list"
      role="tab"
      tabIndex={0}
      onClick={() => history.push(`/product-details/${id}/${productTitleToUrl(name)}/`)}
      onKeyDown={() => history.push(`/product-details/${id}/${productTitleToUrl(name)}/`)}
    >
      <div className="product span3">
        <div className="product-image">
          <figure>
            <img src={image} alt="product" />
          </figure>
        </div>
        <h3 className="product-name">
          <a href="#">{name || 'Name N/A'}</a>
        </h3>
        <p className="product-info">{detail || 'Description not available.'}</p>
        <div className="product-price">
          <p>
            Price: Rs.<strong>{price || 'N/A'}</strong> {offer ? <span>, Offer: {offer} </span> : null}
          </p>
        </div>
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
    </div>
  );
};
export default memo(ProductCard);
