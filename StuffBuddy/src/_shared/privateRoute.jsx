/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ isLogged, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (isLogged ? <Component {...props} /> : <Redirect to="/login" />)}
  />
);
