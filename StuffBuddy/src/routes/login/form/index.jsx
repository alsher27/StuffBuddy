/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

const Form = (props) => {
  const {
    values: { username, password },
    handleChange,
    isValid,
    setFieldTouched,
    handleSubmit,
  } = props;

  const change = (name, e) => {
    e.persist();
    handleChange(e);
    setFieldTouched(name, true, false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="username"
        name="username"
        label="Username"
        value={username}
        fullWidth
        onChange={change.bind(null, 'username')}
      />
      <TextField
        id="password"
        name="password"
        type="password"
        label="Password"
        value={password}
        fullWidth
        onChange={change.bind(null, 'password')}
      />
      <Button
        type="submit"
        variant={('text', 'outlined')}
        color="primary"
        disabled={!isValid}
        fullWidth
      >
        Submit
      </Button>
    </form>
  );
};

Form.propTypes = {
  values: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isValid: PropTypes.bool.isRequired,
  setFieldTouched: PropTypes.func.isRequired,
};

export default Form;
