import * as yup from 'yup';

const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;

export const LoginVS = yup.object().shape({
  email: yup
    .string()
    .required('Email Required')
    .email('Please provide a valid email address'),
  password: yup.string().required('Password Required'),
});

export const SignUpVS = yup.object().shape({
  email: yup
    .string()
    .required('Email Required')
    .email('Please provide a valid email address'),
  name: yup.string().required('Name Required').label('name'),
  password: yup
    .string()
    .required('New Password Required')
    .min(8, 'Password Too Short')
    .matches(
      passwordRegExp,
      'Password must contain at least One Uppercase, One Lowercase and One Number',
    ),

  confirmPassword: yup
    .string()
    .required('Confirm Password Required')
    .oneOf([yup.ref('password'), null], 'Passwords do not match'),
});
