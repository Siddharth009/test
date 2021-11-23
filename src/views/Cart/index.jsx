/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '@Components/Cart/CartItem/index';
import { cartSelector, totalPriceOnCartSelector, totalNoOfItemsSelector } from '../../selectors/cart';

/**
 * @author
 * @function Cart
 * */

const Cart = (props) => {
  const myCart = useSelector((state) => cartSelector(state));
  const totalItems = useSelector((state) => totalNoOfItemsSelector(state));
  const totalPrice = useSelector((state) => totalPriceOnCartSelector(state.cart.cart));
  return (
    <div className="container align-items-center" style={{ marginTop: '20px' }}>
      <div className="row">
        <div className="col-xs-8">
          <div className="panel panel-info">
            <div className="panel-heading">
              <div className="panel-title">
                <div className="row">
                  <div className="col-xs-6">
                    <h5>My Cart</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="panel-body">
              {myCart.length ? (
                myCart.map((cart) => {
                  return <CartItem key={cart.id} cart={cart} />;
                })
              ) : (
                <p>Your cart is empy</p>
              )}
            </div>
            <div className="panel-footer">
              <div className="row text-center">
                <div className="col-xs-10">
                  <h4 className="text-right">
                    Total Quantities: <strong>{totalItems}</strong>
                  </h4>
                  <h4 className="text-right">
                    Total Price <strong>Rs. {totalPrice}</strong>
                  </h4>
                </div>
                <div className="col-xs-2">
                  <button type="button" className="btn btn-success btn-block">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
