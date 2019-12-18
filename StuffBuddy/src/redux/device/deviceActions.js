import { createAction } from 'redux-actions';
import {
  DELETE_DEVICE,
  CREATE_DEVICE,
  SEARCH_DEVICE,
  GET_DEVICES,
  REQUEST_ERROR,
  GET_USER_DEVICES,
} from './deviceActionTypes';

import {
  deleteDevice, createDevice, searchDevice, getUserDevices,
} from '../../services/Fetch';

export const deleteSuccess = createAction(DELETE_DEVICE);
export const createSuccess = createAction(CREATE_DEVICE);
export const searchDeviceSuccess = createAction(SEARCH_DEVICE);
export const getDevicesSuccess = createAction(GET_DEVICES);
export const requestError = createAction(REQUEST_ERROR);
export const userDevices = createAction(GET_USER_DEVICES);

export const deviceDelete = (id) => (dispatch) => {
  deleteDevice('device/delete', id)
    .then((res) => dispatch(deleteSuccess(res)))
    .catch((err) => dispatch(requestError(err)));
};

export const deviceSearch = (data) => (dispatch) => {
  searchDevice('device/search', data)
    .then((res) => dispatch(searchDeviceSuccess(res)))
    .catch((err) => dispatch(requestError(err)));
};

export const deviceCreate = (data) => (dispatch) => {
  createDevice('device/create', data)
    .then((res) => dispatch(createSuccess(res)))
    .catch((err) => dispatch(requestError(err)));
};

export const userDevicesGet = (username) => (dispatch) => {
  getUserDevices('device/devicesOfUser', username)
    .then((res) => dispatch(userDevices(res)))
    .catch((err) => dispatch(requestError(err)));
};
