import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { totalNoOfCartsSelector } from '@src/selectors/cart';
import './style.scss';

/**
 * @author
 * @function Navbar
 * */

const Navbar = () => {
  const totalQuantityOnCart = useSelector((state) => totalNoOfCartsSelector(state));
  return (
    <div className="nav">
      <div className="nav-header">
        <div className="nav-title">
          <Link to="/">Home </Link>
        </div>
      </div>
      <div className="nav-links">
        <Link to="/">All Products</Link>
        <Link to="/my-cart">
          My Cart
          <span className="cart-count">({totalQuantityOnCart})</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
