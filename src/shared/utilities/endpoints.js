const BASE_URL = 'https://billion-pound.herokuapp.com/api/v1/';

const ENDPOINTS = {
  REGISTER: 'signup',
  LOGIN: 'signin',
  GOOGLE_SIGN_IN: 'google_login',
  APPLE_SIGN_IN: 'apple_login',
  FORGOT_PASS: 'password/forgot',
  RESET_PASS: 'password/reset',
  LOGOUT: 'logout',
  ACCESS_TOKEN: 'get_access_token',
};

export {BASE_URL, ENDPOINTS};
