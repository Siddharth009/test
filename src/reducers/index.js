import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '../utils/history';
import login from './login';
import register from './register';
import cart from './cart';
import toast from './toast';

export default combineReducers({
  router: connectRouter(history),
  login,
  register,
  toast,
  cart,
});
