import { combineReducers } from 'redux';
import authReducer from './auth/authReducer';
import deviceReducer from './device/deviceReducer';
import orderReducer from './order/orderReducer';

const Reducers = combineReducers({
  authReducer,
  deviceReducer,
  orderReducer,
});

export default Reducers;
