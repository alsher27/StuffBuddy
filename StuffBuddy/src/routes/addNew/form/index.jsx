/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-no-bind */
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

const Form = props => {
  const {
    values: { DeviceType, Name, Description, Price },
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
        id='type'
        name='type'
        label='Device type'
        helperText={touched.type ? errors.type : ''}
        error={touched.type && Boolean(errors.type)}
        value={DeviceType}
        onChange={change.bind(null, 'type')}
        fullWidth
      />
      <TextField
        id='description'
        name='description'
        label='Description'
        helperText={touched.description ? errors.description : ''}
        error={touched.description && Boolean(errors.description)}
        value={Description}
        onChange={change.bind(null, 'description')}
        fullWidth
      />
      <TextField
        id='name'
        name='name'
        label='Name'
        helperText={touched.name ? errors.name : ''}
        error={touched.name && Boolean(errors.name)}
        value={Name}
        onChange={change.bind(null, 'name')}
        fullWidth
      />
      <TextField
        id='price'
        name='price'
        label='Price'
        helperText={touched.price ? errors.price : ''}
        error={touched.price && Boolean(errors.price)}
        value={Price}
        onChange={change.bind(null, 'price')}
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
