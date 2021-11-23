import { createSelector } from 'reselect';
import { calculateTotalPriceOnCart } from '@src/utils/commonUtils';

export const cartSelector = (state) => state.cart.cart;

export const totalNoOfCartsSelector = createSelector(cartSelector, (cart) => cart.length);

export const totalNoOfItemsSelector = createSelector(cartSelector, (cart) => {
  return Object.keys(cart).reduce((total, id) => {
    // eslint-disable-next-line no-param-reassign
    total += Number(cart[id].quantity);
    return total;
  }, 0);
});

// fix: could be done in a better way
export const totalPriceOnCartSelector = (cart) => {
  return calculateTotalPriceOnCart(cart);
};
