import React, { PureComponent } from 'react';
import { Formik } from 'formik';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Form from './form';
import Header from '../../layout/components/header/Header';

import { addNewSchema } from '../../utils/validation';

class AddNew extends PureComponent {
  render() {
    const { history, deviceCreate } = this.props;
    const initialValues = {
      DeviceType: '',
      Name: '',
      Description: '',
      Price: '',
    };
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
            GO BACK
          </Button>
          <h1>ADD NEW CARD</h1>
        </center>
        <Formik
          component={Form}
          initialValues={initialValues}
          validationSchema={addNewSchema}
          onSubmit={(values) => {
            deviceCreate(values);
            setTimeout(() => history.push('/menu'), 400);
          }}
        />
      </>
    );
  }
}
AddNew.propTypes = {
  deviceCreate: PropTypes.func.isRequired,
  history: PropTypes.element.isRequired,
};

export default withRouter(AddNew);
