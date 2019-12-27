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
import Gpay from './payment/Payment';
import Order from './order';

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
        <Route component={Gpay} exact path='/payment' />
        <Route component={Order} exact path='/order' />
      </Switch>
    );
  }
}

export default Router;
