import React, { PureComponent } from 'react';
import { Formik } from 'formik';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Form from './form';
import Header from '../../layout/components/header/Header';
import './login.scss';

class Login extends PureComponent {
  render() {
    const { history, userLogin } = this.props;
    const initialValues = { username: '', password: '' };
    return (
      <>
        <Header />
        <div className="login-wrapper">
          <div className="login-logo"><h2>LOGIN</h2></div>
          <div className="login-form">
            <Formik
              component={Form}
              initialValues={initialValues}
              onSubmit={(values) => {
                userLogin(values);
                setTimeout(() => history.push('/menu'), 400);
              }}
            />
          </div>
          <div className="login-question">Not with us yet ?</div>
          <Button
            variant={('text', 'outlined')}
            color="inherit"
            onClick={() => { history.push('/register'); }}
          >
        REGISTER
          </Button>
        </div>
      </>
    );
  }
}
Login.propTypes = {
  userLogin: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(Login);
