import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './landing/Landing';
import Login from './login';
import Registration from './registration';
import Menu from './menu';
// import { PrivateRoute } from '../_shared/privateRoute';
import Profile from './profile';
import AdminPanel from './adminPanel';
import AddNew from './addNew';

class Router extends PureComponent {
  render() {
    return (
      <Switch>
        <Route component={Menu} exact path="/menu" />
        <Route component={Landing} exact path="/" />
        <Route component={Login} exact path="/login" />
        <Route component={Registration} exact path="/register" />
        <Route component={Profile} exact path="/profile" />
        <Route component={AdminPanel} exact path="/adminpanel" />
        <Route component={AddNew} exact path="/addnew" />
      </Switch>
    );
  }
}

export default Router;
