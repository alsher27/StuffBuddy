/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

const Form = (props) => {
  const {
    values: { name, email },
    handleChange,
    errors,
    touched,
    isValid,
    setFieldTouched,
    handleSubmit,
  } = props;

  const change = (info, e) => {
    e.persist();
    handleChange(e);
    setFieldTouched(info, true, false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="name"
        name="name"
        label="name"
        value={name}
        helperText={touched.name ? errors.name : ''}
        error={touched.name && Boolean(errors.name)}
        fullWidth
        onChange={change.bind(null, 'name')}
      />
      <TextField
        id="email"
        name="email"
        type="email"
        label="email"
        helperText={touched.email ? errors.email : ''}
        error={touched.email && Boolean(errors.email)}
        value={email}
        fullWidth
        onChange={change.bind(null, 'email')}
      />
      <Button
        type="submit"
        variant={('text', 'outlined')}
        color="primary"
        fullWidth
        disabled={!isValid}
      >
        Submit
      </Button>
    </form>
  );
};

Form.propTypes = {
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isValid: PropTypes.bool.isRequired,
  setFieldTouched: PropTypes.func.isRequired,
};

export default Form;
