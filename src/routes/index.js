import AllProducts from '../views/AllProducts';
import Cart from '../views/Cart';
import ProductDetails from '../views/ProductDetails';

const indexRoutes = [
  {
    path: '/my-cart',
    name: 'My Cart',
    component: Cart,
  },
  {
    exact: true,
    path: '/',
    name: 'Product Page',
    component: AllProducts,
    authenticated: false,
  },
  {
    path: '/product-details/:id/:title',
    name: 'Product Details',
    component: ProductDetails,
    authenticated: false,
  },
];

export default indexRoutes;
