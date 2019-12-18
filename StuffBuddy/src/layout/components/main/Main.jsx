import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Main extends PureComponent {
  render() {
    const { children } = this.props;
    return <>{children}</>;
  }
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
