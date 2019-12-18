/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React, { PureComponent } from 'react';
import { createBrowserHistory } from 'history';
import { BrowserRouter } from 'react-router-dom';

import Main from './components/main/Main';
import './layout.scss';
import Routes from '../routes/Routes';

const myHistory = createBrowserHistory();

class Layout extends PureComponent {
  render() {
    return (
      <div className="layout">
        <BrowserRouter history={myHistory}>
          <main className="main">
            <Main>
              <Routes />
            </Main>
          </main>
        </BrowserRouter>

      </div>
    );
  }
}

export default Layout;
