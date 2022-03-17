import * as TYPES from '../types';

//Email Validation Action
export const loginRequest = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.LOGIN_REQUEST_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};
//Social Login Action
export const socialLoginRequest = (
  login_type,
  params,
  cbSuccess,
  cbFailure,
) => {
  return {
    type: TYPES.SOCIAL_LOGIN_REQUEST_REQUEST,
    login_type,
    params,
    cbSuccess,
    cbFailure,
  };
};
//Sign up obj Action
export const signUpRequest = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.SIGNUP_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};

//Forgot Password Action
export const forgotPassRequest = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.FORGOT_PASSWORD_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};
//Reset Password Action
export const resetPassRequest = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.RESET_PASSWORD_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};
//Verify OTP Action
export const verifyOTPRequest = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.OTP_VERIFY_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};

//Set Walkthrough Action
export const setWalkthrough = params => {
  return {
    type: TYPES.SET_WALKTHROUGH_REQUEST,
    params,
  };
};

//Set Walkthrough Action
export const logoutRequset = params => {
  return {
    type: TYPES.LOGOUT_REQUEST_REQUEST,
    params,
  };
};
