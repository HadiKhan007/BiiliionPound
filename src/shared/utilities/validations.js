import * as yup from 'yup';

import {emailRegex} from './constant';

export const signupFormFields = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

export const updateFormFields = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

export const loginFormFields = {
  email: '',
  password: '',
};
export const resetFormFields = {
  password: '',
  confirmPassword: '',
};
export const forgotFormFields = {
  email: '',
};
export const codeFormFields = {
  code: '',
};

const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;

export const LoginVS = yup.object().shape({
  email: yup
    .string()
    .required('Email Required')
    .email('Please provide a valid email address'),
  password: yup.string().required('Password Required'),
});

export const SignUpVS = yup.object().shape({
  firstName: yup.string().required('First Name Required').label('firstName'),
  lastName: yup.string().required('Last Name Required').label('lastName'),
  email: yup
    .string()
    .required('Email Required')
    .email('Please provide a valid email address'),
  password: yup.string().required('Password Required'),
});

export const ResetPasswordVS = yup.object().shape({
  password: yup.string().required('Password Required'),

  confirmPassword: yup
    .string()
    .required('Confirm Password Required')
    .oneOf([yup.ref('password'), null], 'Passwords do not match'),
});

export const ForgotPasswordVS = yup.object().shape({
  email: yup
    .string()
    .required('Email Required')
    .email('Please provide a valid email address'),
});
