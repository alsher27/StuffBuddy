/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/forbid-prop-types */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Header from '../../layout/components/header/Header';
import Card from './components/card';

class Profile extends PureComponent {
  render() {
    const { adminUsers } = this.props;
    return (
      <>
        <Header />
        <br />
        <center>USERS</center>
        <br />
        {adminUsers.map((item) => (
          <Card {...item} />
        ))}
      </>
    );
  }
}

Profile.propTypes = {
  adminUsers: PropTypes.array.isRequired,
};

export default Profile;
