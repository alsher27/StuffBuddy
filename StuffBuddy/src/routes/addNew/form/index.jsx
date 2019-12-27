/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-no-bind */
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

const Form = props => {
  const {
    values: { DeviceType, DeviceName, Description, Price },
    errors,
    touched,
    handleChange,
    isValid,
    setFieldTouched,
    handleSubmit
  } = props;

  const change = (name, e) => {
    e.persist();
    handleChange(e);
    setFieldTouched(name, true, false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id='DeviceType'
        name='DeviceType'
        label='Device type'
        helperText={touched.DeviceType ? errors.DeviceType : ''}
        error={touched.DeviceType && Boolean(errors.DeviceType)}
        value={DeviceType}
        onChange={change.bind(null, 'DeviceType')}
        fullWidth
      />
      <TextField
        id='Description'
        name='Description'
        label='Description'
        helperText={touched.Description ? errors.Description : ''}
        error={touched.Description && Boolean(errors.Description)}
        value={Description}
        onChange={change.bind(null, 'Description')}
        fullWidth
      />
      <TextField
        id='DeviceName'
        name='DeviceName'
        label='Name'
        helperText={touched.DeviceName ? errors.DeviceName : ''}
        error={touched.DeviceName && Boolean(errors.DeviceName)}
        value={DeviceName}
        onChange={change.bind(null, 'DeviceName')}
        fullWidth
      />
      <TextField
        id='Price'
        name='Price'
        label='Price'
        helperText={touched.Price ? errors.Price : ''}
        error={touched.Price && Boolean(errors.Price)}
        value={Price}
        onChange={change.bind(null, 'Price')}
        fullWidth
      />
      <Button
        type='submit'
        fullWidth
        variant={('text', 'outlined')}
        color='primary'
        disabled={!isValid}
      >
        Submit
      </Button>
    </form>
  );
};

Form.propTypes = {
  values: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isValid: PropTypes.bool.isRequired,
  setFieldTouched: PropTypes.func.isRequired
};

export default Form;
