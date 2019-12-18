import { handleActions } from 'redux-actions';
import {
  requestError, updateUserOrder, createUserOrder, getUserOrder, removeUserOrder, userOrders,
} from './orderActions';

const initialState = {
  isError: false,
  error: null,
  userOrders: [],
};

const deviceReducer = handleActions(
  {
    [requestError]: (state, action) => ({
      ...state,
      isError: true,
      error: action.payload,
      devicesShown: null,
    }),
    [createUserOrder]: (state, action) => ({
      ...state,
      isError: false,
      error: null,
      devicesShown: action.payload,
    }),
    [searchDeviceSuccess]: (state, action) => ({
      ...state,
      isError: false,
      error: null,
      devicesShown: action.payload,
    }),
    [deleteSuccess]: (state, action) => ({
      ...state,
      isError: false,
      error: null,
      devicesShown: action.payload,
    }),
    [userDevices]: (state, action) => ({
      ...state,
      isError: false,
      error: null,
      userDevices: action.payload,
    }),
  },
  initialState,
);

export default deviceReducer;
