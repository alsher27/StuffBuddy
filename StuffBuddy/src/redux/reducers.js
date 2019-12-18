import { combineReducers } from 'redux';
import authReducer from './auth/authReducer';
import deviceReducer from './device/deviceReducer';

const Reducers = combineReducers({
  authReducer,
  deviceReducer,
});

export default Reducers;
