import { createAction } from 'redux-actions';
import {
  GET_USER_ORDERS,
  REQUEST_ERROR,
  REMOVE_ORDER,
  CREATE_ORDER,
  GET_ORDER,
  UPDATE_ORDER,
} from './orderActionTypes';

import {
  createOrder, removeOrder, getOrder, getUserOrders, updateOrder,
} from '../../services/Fetch';

export const requestError = createAction(REQUEST_ERROR);
export const userOrders = createAction(GET_USER_ORDERS);
export const removeUserOrder = createAction(REMOVE_ORDER);
export const createUserOrder = createAction(CREATE_ORDER);
export const getUserOrder = createAction(GET_ORDER);
export const updateUserOrder = createAction(UPDATE_ORDER);

export const orderRemove = (id) => (dispatch) => {
  removeOrder('order/remove', id)
    .then((res) => dispatch(removeOrder(res)))
    .catch((err) => dispatch(requestError(err)));
};

export const orderCreate = (data) => (dispatch) => {
  createOrder('order/create', data)
    .then((res) => dispatch(createOrder(res)))
    .catch((err) => dispatch(requestError(err)));
};

export const orderUpdate = (data) => (dispatch) => {
  updateOrder('order/update', data)
    .then((res) => dispatch(createOrder(res)))
    .catch((err) => dispatch(requestError(err)));
};

export const orderGet = (id) => (dispatch) => {
  getOrder(`order/create/${id}`)
    .then((res) => dispatch(createOrder(res)))
    .catch((err) => dispatch(requestError(err)));
};

export const userOrdersGet = (username) => (dispatch) => {
  getUserOrders('order/userOrders', username)
    .then((res) => dispatch(userOrders(res)))
    .catch((err) => dispatch(requestError(err)));
};
