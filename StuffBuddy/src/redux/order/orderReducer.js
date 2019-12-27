import { handleActions } from 'redux-actions';
import {
  requestError, updateUserOrder, createUserOrder, getUserOrder, removeUserOrder, userOrders,
} from './orderActions';

const initialState = {
  isError: false,
  error: null,
  order: {},
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
      order: action.payload,
    }),
  },
  initialState,
);

export default deviceReducer;
