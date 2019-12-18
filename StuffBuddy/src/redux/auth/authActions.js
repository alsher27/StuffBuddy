import { createAction } from 'redux-actions';
import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT_FAILURE,
  LOGOUT_SUCCESS,
  REGISTRATION_FAILURE,
  REGISTRATION_SUCCESS,
  REQUEST_PENDING,
  ADMIN_GET_USERS,
  CHANGE_USER,
} from './authActionTypes';
import {
  login, logout, register, getUsers,
} from '../../services/Fetch';

export const loginFailure = createAction(LOGIN_FAILURE);
export const loginSuccess = createAction(LOGIN_SUCCESS);
export const logoutFailure = createAction(LOGOUT_FAILURE);
export const logoutSuccess = createAction(LOGOUT_SUCCESS);
export const requestPending = createAction(REQUEST_PENDING);
export const registrationSuccess = createAction(REGISTRATION_SUCCESS);
export const registrationFailure = createAction(REGISTRATION_FAILURE);
export const adminGetUsers = createAction(ADMIN_GET_USERS);
export const changeUser = createAction(CHANGE_USER);

export const userLogin = (user) => (dispatch) => {
  dispatch(requestPending());

  login('account/login', user)
    .then((res) => dispatch(loginSuccess(res)))
    .catch(() => dispatch(loginFailure()));
};

export const userLogout = () => (dispatch) => {
  dispatch(requestPending);

  logout('account/signout')
    .then(() => dispatch(logoutSuccess()))
    .catch(() => dispatch(logoutFailure()));
};

export const userRegister = (user) => (dispatch) => {
  dispatch(requestPending);

  dispatch(registrationSuccess(user));

  register('account/register', user).catch(() => dispatch(registrationFailure()));
};

export const usersGet = () => (dispatch) => {
  dispatch(requestPending);

  getUsers('admin/users')
    .then((res) => dispatch(adminGetUsers(res)))
    .catch(() => dispatch(loginFailure()));
};

export const userChange = (data) => (dispatch) => {
  dispatch(changeUser(data));
};
