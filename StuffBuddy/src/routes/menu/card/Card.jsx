import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

class Card extends PureComponent {
  render() {
    const {
 DeviceType, Name, Description, Price, orderCreate, history, 
} = this.props;
    return (
      <>
        <span>
          <h3>{Name}</h3>
        </span>
        <span>{DeviceType}</span>
        <span>{Description}</span>
        <span>{Price}</span>
        <Button
            variant={('text', 'outlined')}
            color="black"
            onClick={() => {
              orderCreate({ name: Name, price: Price });
              history.push('/order');
            }}
          >
            ORDER
          </Button>
      </>
    );
  }
}

Card.propTypes = {
  DeviceType: PropTypes.string.isRequired,
  Name: PropTypes.string.isRequired,
  Description: PropTypes.string.isRequired,
  Price: PropTypes.number.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
export default Card;
