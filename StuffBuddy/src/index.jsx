import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import App from './App';
import Reducers from './redux/reducers';
import {hot} from 'react-hot-loader';

const store = createStore(Reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

const hotApp = hot(module)(app);

ReactDOM.render(app, document.getElementById('root'));