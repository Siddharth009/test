/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import { createReducer } from 'reduxsauce';
import { produce } from 'immer';
import { Types } from '@Actions/cart';

const initialState = {
  cart: [],
};

const addProductToCart = (state, action) => {
  const {
    payload,
    payload: { id },
  } = action;
  const newState = produce(state, (deferedState) => {
    const itemExistsOnCart = deferedState.cart.find((item) => item.id === id);
    if (itemExistsOnCart) {
      const itemIndex = deferedState.cart.findIndex((item) => item.id === id);
      const previousQuantity = deferedState.cart[itemIndex].quantity;
      deferedState.cart[itemIndex].quantity = previousQuantity ? previousQuantity + 1 : 1;
    } else {
      const cartObject = {
        ...payload,
        quantity: 1,
      };
      deferedState.cart = [...deferedState.cart, cartObject];
    }
  });
  return newState;
};

const deleteProductFromCart = (state, action) => {
  const {
    payload: { id },
  } = action;
  const newState = produce(state, (deferedState) => {
    deferedState.cart = deferedState.cart.filter((item) => item.id !== id);
  });
  return newState;
};

const cartReducer = createReducer(initialState, {
  [Types.ADD_PRODUCT_TO_CART]: addProductToCart,
  [Types.DELETE_PRODUCT_FROM_CART]: deleteProductFromCart,
});

export default cartReducer;
