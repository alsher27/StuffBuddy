import * as Yup from 'yup';

export const registrationSchema = Yup.object().shape({
  username: Yup.string('Enter an username')
    .required('Username is required')
    .min(4, 'Username must contain more, than 4 digits')
    .matches(
      /[a-zA-Z0-9]/,
      'Username can only contain Latin letters or digits',
    ),
  password: Yup.string('Enter a password')
    .required('Password is required')
    .min(8, 'Password should  be longer than 8 digits'),
  passwordConfirm: Yup.string('Enter an author')
    .required('Password confirmation is required')
    .oneOf([Yup.ref('password'), null], 'Passwords should match'),
  email: Yup.string('Enter an email')
    .required('Email is required')
    .email('Needs to be an email'),

});

export const profileSchema = Yup.object().shape({
  name: Yup.string('Enter an name')
    .required('Name is required')
    .min(4, 'Name must contain more, than 4 digits')
    .matches(/[a-zA-Z]/, 'Name can only contain Latin letters'),
  email: Yup.string('Enter an email')
    .required('Email is required')
    .email('Needs to be an email'),
});

export const searchSchema = Yup.object().shape({
  text: Yup.string('Enter a device')
    .required('You need to put data to be able to search')
    .matches(/[a-zA-Z]/, 'Device name can only contain Latin letters'),
});

export const filterSchema = Yup.object().shape({
  type: Yup.string('Enter the type').matches(/[a-zA-Z]/, 'Type can only contain Latin letters'),
  rating: Yup.number('Enter the rating'),
  frompice: Yup.number('Enter the base price'),
  toprice: Yup.number('Enter the number'),
});

export const addNewSchema = Yup.object().shape({
  type: Yup.string('Enter the type').matches(/[a-zA-Z]/, 'Type can only contain Latin letters'),
  description: Yup.string('Enter the type').matches(/[a-zA-Z]/, 'Description can only contain Latin letters'),
  name: Yup.string('Enter an name')
    .required('Name is required')
    .matches(/[a-zA-Z]/, 'Name can only contain Latin letters'),
  price: Yup.number('Enter the price'),

});
