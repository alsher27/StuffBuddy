/* eslint-disable react/forbid-prop-types */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { Formik } from 'formik';

import Header from '../../layout/components/header/Header';
import { searchSchema, filterSchema } from '../../utils/validation';

import Form from './form/Form';
import FilterForm from './form/FilterForm';
import Card from './card/Card';
import './menu.scss';

class Menu extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { wantFilter: false };
  }

  render() {
    const {
 user, history, devicesShown, deviceSearch 
} = this.props;
    const { wantFilter } = this.state;
    const initialValuesSearch = { text: '' };
    const initialValuesFilter = {};

    return (
      <>
        <center>
          <Header />
          <div className="menu-profile">
            <div className="menu-profile-addnew">
              <Button
                variant={('text', 'outlined')}
                color="inherit"
                onClick={() => {
                  history.push('/addnew');
                }}
              >
                ADD NEW DEVICE
              </Button>
            </div>
            <div className="menu-profile-button">
              <Button
                variant={('text', 'outlined')}
                color="inherit"
                onClick={() => {
                  history.push('/profile');
                }}
              >
                PROFILE
              </Button>
            </div>
          </div>
          <div className="menu-search">
            <Formik
              component={Form}
              initialValues={initialValuesSearch}
              validationSchema={searchSchema}
              onSubmit={(values) => {
                deviceSearch({
                  text: values.text,
                  rating: '',
                  type: '',
                  fromprice: '',
                  toprice: '',
                });
                setTimeout(() => history.push('/menu'), 400);
              }}
            />
          </div>
          {wantFilter ? (
            <>
              <div className="menu-filter-button">
                <Button
                  variant={('text', 'outlined')}
                  color="inherit"
                  onClick={() => {
                    this.setState({
                      wantFilter: !this.state.wantFilter,
                    });
                  }}
                >
                  CLOSE FILTERS
                </Button>
              </div>
              <div className="menu-filter">
                <Formik
                  component={FilterForm}
                  initialValues={initialValuesFilter}
                  validationSchema={filterSchema}
                  onSubmit={(values) => {
                    deviceSearch({
                      text: '',
                      rating: values.rating,
                      type: values.type,
                      fromprice: values.fromprice,
                      toprice: values.toprice,
                    });
                    setTimeout(() => history.push('/menu'), 400);
                  }}
                />
              </div>
            </>
          ) : (
            <div className="menu-filter-button">
              <Button
                variant={('text', 'outlined')}
                color="inherit"
                onClick={() => {
                  this.setState({
                    wantFilter: !this.state.wantFilter,
                  });
                }}
              >
                OPEN FILTERS
              </Button>
            </div>
          )}
          {!devicesShown.length
            ? ''
            : devicesShown.map((item) => <Card {...item} />)}
        </center>
      </>
    );
  }
}

Menu.propTypes = {
  user: PropTypes.object.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  deviceSearch: PropTypes.func.isRequired,
  devicesShown: PropTypes.array.isRequired,
};

export default Menu;
