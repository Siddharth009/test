import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  addProductToCart: ['payload'],
  deleteProductFromCart: ['payload'],
});

export default Creators;
