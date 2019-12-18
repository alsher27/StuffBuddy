/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

const Form = (props) => {
  const {
    values: {
 email, password, passwordConfirm, username 
},
    errors,
    touched,
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
        id="email"
        name="email"
        label="Email"
        value={email}
        helperText={touched.email ? errors.email : ''}
        error={touched.email && Boolean(errors.email)}
        onChange={change.bind(null, 'email')}
        fullWidth
      />
      <TextField
        id="username"
        name="username"
        type="username"
        label="Name"
        value={username}
        helperText={touched.username ? errors.username : ''}
        error={touched.username && Boolean(errors.username)}
        onChange={change.bind(null, 'username')}
        fullWidth
      />
      <TextField
        id="password"
        name="password"
        type="password"
        label="Password"
        value={password}
        helperText={touched.password ? errors.password : ''}
        error={touched.password && Boolean(errors.password)}
        onChange={change.bind(null, 'password')}
        fullWidth
      />
      <TextField
        id="passwordConfirm"
        name="passwordConfirm"
        type="password"
        label="Confirm your password"
        value={passwordConfirm}
        helperText={touched.passwordConfirm ? errors.passwordConfirm : ''}
        error={touched.passwordConfirm && Boolean(errors.passwordConfirm)}
        onChange={change.bind(null, 'passwordConfirm')}
        fullWidth
      />
      <Button
        type="submit"
        fullWidth
        variant={('text', 'outlined')}
        color="primary"
      >
        Submit
      </Button>
    </form>
  );
};

Form.propTypes = {
  values: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isValid: PropTypes.bool.isRequired,
  setFieldTouched: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
};

export default Form;
