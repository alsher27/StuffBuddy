import { handleActions } from 'redux-actions';
import {
  requestError, createSuccess, searchDeviceSuccess, deleteSuccess, userDevices,
} from './deviceActions';

const initialState = {
  isError: false,
  error: null,
  devicesShown: [],
  userDevices: [],
};

const deviceReducer = handleActions(
  {
    [requestError]: (state, action) => ({
      ...state,
      isError: true,
      error: action.payload,
      devicesShown: null,
    }),
    [createSuccess]: (state, action) => ({
      ...state,
      isError: false,
      error: null,
      userDevices: [...state.userDevices, action.payload],
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
