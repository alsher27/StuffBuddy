import { handleActions } from 'redux-actions';
import {
  loginFailure,
  loginSuccess,
  logoutFailure,
  logoutSuccess,
  registrationSuccess,
  registrationFailure,
  requestPending,
  adminGetUsers,
  changeUser,
} from './authActions';

const initialState = {
  isLogged: false,
  user: { email: 'maxmaxmax@getMaxListeners.com', name: 'Max', password: 123 },
  pending: false,
  isError: false,
  adminUsers: [
    { email: 'maxmaxmax@getMaxListeners.com', name: 'Max', password: 123 },
    { email: 'hey@ho', name: 'Harry', password: 123 },
  ],
};

const authReducer = handleActions(
  {
    [requestPending]: (state) => ({
      ...state,
      pending: true,
    }),
    [loginFailure]: (state) => ({
      ...state,
      pending: false,
      isError: true,
    }),
    [loginSuccess]: (state, action) => ({
      ...state,
      pending: false,
      isError: false,
      isLogged: true,
      user: action.payload,
    }),
    [logoutFailure]: (state) => ({
      ...state,
      pending: false,
      isError: true,
    }),
    [logoutSuccess]: (state) => ({
      ...state,
      pending: false,
      isError: false,
      user: null,
      isLogged: false,
    }),
    [registrationFailure]: (state) => ({
      ...state,
      pending: false,
      isError: true,
    }),
    [registrationSuccess]: (state, action) => ({
      ...state,
      pending: false,
      isError: false,
      isLogged: true,
      user: action.payload,
    }),
    [adminGetUsers]: (state, action) => ({
      ...state,
      adminUsers: action.payload,
    }),
    [changeUser]: (state, action) => ({
      ...state,
      user: action.payload,
    }),
  },
  initialState,
);

export default authReducer;
