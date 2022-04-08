const BASE_URL = 'https://billion-pound.herokuapp.com/api/v1/';
// const BASE_URL = 'http://192.168.11.164:3000/api/v1/';

const ENDPOINTS = {
  REGISTER: 'signup',
  LOGIN: 'signin',
  GOOGLE_SIGN_IN: 'google_login',
  APPLE_SIGN_IN: 'apple_login',
  FORGOT_PASS: 'password/forgot',
  RESET_PASS: 'password/reset',
  LOGOUT: 'logout',
  ACCESS_TOKEN: 'get_access_token',
  VERIFY_OTP: 'password/check_otp',
  EXERCISES: 'exercises',
  USER_EXERCISES: 'user_exercises',
  EVENTS: 'events',
  USER_EVENTS: 'user_events',
  USERS_TEAM: 'user_teams',
  PROFILE: `users`,
  FAQ: 'faqs',
  TERMS_CONDITION: 'term_and_conditions',
  PRIVACY_POLICY: 'privacy_policies',
  ACTIVITY: 'exercises',
  CHECKOUT: 'checkout',
};

export {BASE_URL, ENDPOINTS};
