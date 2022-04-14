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
export const AddNewExerciseFormFields = {
  exercise_name: '',
  category: '',
  bodyPart: '',
};

const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;

export const LoginVS = yup.object().shape({
  email: yup
    .string()
    .required('Email Required')
    .email('Please provide a valid email address'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password Required'),
});

export const SignUpVS = yup.object().shape({
  firstName: yup.string().required('First Name Required').label('firstName'),
  lastName: yup.string().required('Last Name Required').label('lastName'),
  email: yup
    .string()
    .required('Email Required')
    .email('Please provide a valid email address'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password Required'),
});

export const ResetPasswordVS = yup.object().shape({
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('New Password Required'),

  confirmPassword: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Confirm New Password Required')
    .oneOf([yup.ref('password'), null], 'New Passwords do not match'),
});

export const ForgotPasswordVS = yup.object().shape({
  email: yup
    .string()
    .required('Email Required')
    .email('Please provide a valid email address'),
});

export const UpdateVS = yup.object().shape({
  firstName: yup.string().required('First Name Required').label('firstName'),
  lastName: yup.string().required('Last Name Required').label('lastName'),
  email: yup
    .string()
    .required('Email Required')
    .email('Please provide a valid email address'),
});

export const AddNewExerciseVS = yup.object().shape({
  exercise_name: yup.string().required('Exercise Name Required'),
  category: yup.object().shape().required('Exercise Category Required'),
  bodyPart: yup.object().shape().required('Exercise Body Part  Required'),
});
