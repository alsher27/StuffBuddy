import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Header from '../../layout/components/header/Header';

class Order extends PureComponent {
  render() {
    const { history, order } = this.props;
    return (
      <>
        <center>
          <Header />
          <Button
            variant={('text', 'outlined')}
            color="black"
            onClick={() => {
              history.push('/menu');
            }}
          >
            NO, GET ME BACK
          </Button>
          <h1> YOUR ORDER </h1>

          Name: {order.name}
          Price: {order.price}
          <Button
            variant={('text', 'outlined')}
            color="black"
            onClick={() => {
              window.location.href = 'https://mightwarrior.recurly.com/subscribe/stuffbuddy';
            }}
          >
            PROCEED TO CHECKOUT
          </Button>
        </center>
      </>
    );
  }
}
Order.propTypes = {
  order: PropTypes.object.isRequired,
  history: PropTypes.element.isRequired,
};

export default withRouter(Order);
