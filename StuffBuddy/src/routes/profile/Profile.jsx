/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/forbid-prop-types */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { Formik } from 'formik';
import Header from '../../layout/components/header/Header';
import { profileSchema } from '../../utils/validation';
import './profile.scss';
import Form from './form';

class Profile extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { ifChange: false };
  }

  componentDidMount() {
    const { userDevicesGet, user } = this.props;
    userDevicesGet(user.email);
  }

  render() {
    const { user, userChange, userDevices } = this.props;
    const { ifChange } = this.state;
    const initialValues = { name: user.name, email: user.email };
    return (
      <>
        <Header />
        <h2 className="profile-up"> PROFILE </h2>
        <br />
        <br />
        <center>
          <span className="profile-article">
            {' '}
            Do you want to change something ?
{' '}
          </span>
          <div className="profile-button">
            <Button
              variant={('text', 'outlined')}
              color="inherit"
              onClick={() => {
                this.setState({
                  ifChange: !this.state.ifChange,
                });
              }}
            >
              CHANGE
            </Button>
          </div>
        </center>
        <center>
          {ifChange ? (
            <div className="login-form">
              <Formik
                component={Form}
                initialValues={initialValues}
                validationSchema={profileSchema}
                onSubmit={(values) => {
                  console.log(values);
                  userChange(values);
                }}
              />
            </div>
          ) : (
            <>
              <div className="profile-email">
                <h3>
Your email is
{' '}
{user.email}
</h3>
              </div>
              <div className="profile=name">
Your name is
{' '}
{user.name}
</div>
{' '}
            </>
          )}
        </center>
      </>
    );
  }
}

Profile.propTypes = {
  user: PropTypes.object.isRequired,
  userChange: PropTypes.func.isRequired,
  userDevicesGet: PropTypes.func.isRequired,
};

export default Profile;
