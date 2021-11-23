/* eslint-disable react/prop-types */
import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import cartActions from '@Actions/cart';
import './style.scss';
/**
 * @author
 * @function CartItem
 * */

const CartItem = ({ cart, cart: { name, price, detail, offer, image, quantity } }) => {
  const dispatch = useDispatch();
  const { deleteProductFromCart } = cartActions;
  return (
    <>
      <div className="row">
        <div className="col-xs-2">
          <figure>
            <img className="img-responsive" alt="car" src={image} />
          </figure>
        </div>
        <div className="col-xs-4">
          <h4 className="product-name">
            <strong>{name || 'Name N/A'}</strong>
          </h4>
          <h4>
            <small>{detail || 'Description not available.'}</small>
          </h4>
        </div>
        <div className="col-xs-6">
          <div className="col-xs-6 text-right">
            <h6>
              {/* <span className="text-muted">$</span> */}
              Price: Rs.<strong>{price || 'N/A'}</strong> {offer ? <span>, Offer: {offer} </span> : null}
            </h6>
          </div>
          <div className="col-xs-4">
            <span>
              Quantity: <strong>{quantity}</strong>
            </span>
          </div>
          <div className="col-xs-2">
            <button
              type="button"
              className="btn btn-link btn-xs"
              onClick={(e) => {
                e.stopPropagation();
                dispatch(deleteProductFromCart(cart));
              }}
            >
              <span className="glyphicon glyphicon-trash"> </span>
            </button>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default memo(CartItem);
