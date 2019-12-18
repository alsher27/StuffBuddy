import React, { PureComponent } from 'react';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import './landing.scss';

class Landing extends PureComponent {
  render() {
    const { history } = this.props;
    return (
      <div className="wrapper-landing">
        <div className="landing-label">
          <h1>STUFFBUDDY</h1>
        </div>
        <div className="landing-article">
          <h3>The largest, most trusted tech sharing community</h3>
        </div>
        <div className="landing=button">
          <Button
            variant={('text', 'outlined')}
            color="inherit"
            onClick={() => {
              history.push('/register');
            }}
          >
            GET STARTED
          </Button>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(Landing);
