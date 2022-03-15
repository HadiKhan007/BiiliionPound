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

//Set Walkthrough Action
export const setWalkthrough = params => {
  return {
    type: TYPES.SET_WALKTHROUGH_REQUEST,
    params,
  };
};
