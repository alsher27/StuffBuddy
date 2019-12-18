import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Card extends PureComponent {
  render() {
    const {
 DeviceType, Name, Description, Price 
} = this.props;
    return (
      <>
        <span>
          <h3>{Name}</h3>
        </span>
        <span>{DeviceType}</span>
        <span>{Description}</span>
        <span>{Price}</span>
      </>
    );
  }
}

Card.propTypes = {
  DeviceType: PropTypes.string.isRequired,
  Name: PropTypes.string.isRequired,
  Description: PropTypes.string.isRequired,
  Price: PropTypes.number.isRequired,
};
export default Card;
