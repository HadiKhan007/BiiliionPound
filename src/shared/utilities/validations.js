// import * as yup from 'yup';

import {emailRegex} from './constant';

// export const signupFormFields = {
//   firstName: '',
//   lastName: '',
//   email: '',
//   password: '',
// };

// export const updateFormFields = {
//   firstName: '',
//   lastName: '',
//   email: '',
//   password: '',
// };

// export const loginFormFields = {
//   email: '',
//   password: '',
// };
// export const resetFormFields = {
//   password: '',
//   confirmPassword: '',
// };
// export const forgotFormFields = {
//   email: '',
// };
// export const codeFormFields = {
//   code: '',
// };

// const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;

// export const LoginVS = yup.object().shape({
//   email: yup
//     .string()
//     .required('Email Required')
//     .email('Please provide a valid email address'),
//   password: yup.string().required('Password Required'),
// });

// export const SignUpVS = yup.object().shape({
//   firstName: yup.string().required('First Name Required').label('firstName'),
//   lastName: yup.string().required('Last Name Required').label('lastName'),
//   email: yup
//     .string()
//     .required('Email Required')
//     .email('Please provide a valid email address'),
//   password: yup.string().required('Password Required'),
// });

// export const ResetPasswordVS = yup.object().shape({
//   password: yup.string().required('Password Required'),

//   confirmPassword: yup
//     .string()
//     .required('Confirm Password Required')
//     .oneOf([yup.ref('password'), null], 'Passwords do not match'),
// });

// export const ForgotPasswordVS = yup.object().shape({
//   email: yup
//     .string()
//     .required('Email Required')
//     .email('Please provide a valid email address'),
// });
export const emailValidation = val => {
  if (emailRegex.test(val) === false && val.length > 0) {
    return 'Email is invalid';
  } else if (val.length == 0) {
    return 'Email is required';
  }
  return false;
};
export const passwordValidation = val => {
  if (val.length === 0) {
    return 'Password is required';
  } else if (val.length <= 5) {
    return 'Password should be minimum 6 character';
  }
  return false;
};

export const firstNameValidation = val => {
  if (val.length == 0) {
    return 'First Name is required';
  }
  return false;
};
export const lastNameValidation = val => {
  if (val.length == 0) {
    return 'Last Name is required';
  }
  return false;
};
