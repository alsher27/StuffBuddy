/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

const Form = (props) => {
  const {
    values: {
 rating, type, fromprice, toprice 
},
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
        id="rating"
        name="rating"
        label="Rating"
        value={rating}
        helperText={touched.rating ? errors.rating : ''}
        error={touched.rating && Boolean(errors.rating)}
        onChange={change.bind(null, 'rating')}
      />
      <TextField
        id="type"
        name="type"
        label="Type"
        value={type}
        helperText={touched.type ? errors.type : ''}
        error={touched.type && Boolean(errors.type)}
        onChange={change.bind(null, 'type')}
      />
      <TextField
        id="fromprice"
        name="fromprice"
        label="Price from"
        value={fromprice}
        helperText={touched.fromprice ? errors.fromprice : ''}
        error={touched.fromprice && Boolean(errors.fromprice)}
        onChange={change.bind(null, 'fromprice')}
      />
      <TextField
        id="toprice"
        name="toprice"
        label="Price to"
        value={toprice}
        helperText={touched.toprice ? errors.toprice : ''}
        error={touched.toprice && Boolean(errors.toprice)}
        onChange={change.bind(null, 'toprice')}
      />

      <Button type="submit" variant={('text', 'outlined')} color="primary">
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
