/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

const Form = (props) => {
  const {
    values: { text },
    errors,
    touched,
    handleChange,
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
        id="text"
        name="text"
        label="Search items"
        value={text}
        helperText={touched.text ? errors.text : ''}
        error={touched.text && Boolean(errors.text)}
        onChange={change.bind(null, 'text')}
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
  setFieldTouched: PropTypes.func.isRequired,
};

export default Form;
