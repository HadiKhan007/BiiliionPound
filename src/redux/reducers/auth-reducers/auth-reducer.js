import * as TYPES from '../../actions/types';

const initialState = {
  loading: false,
  isSuccess: false,
  isFailure: false,
  walkthrough: false,
  userInfo: null,
  forgotPassRes: null,
  resetPassRes: null,
  otp_verify: null,
};
const authReducer = (state = initialState, actions) => {
  const {type, payload} = actions;
  switch (type) {
    //************Login Sates*************
    case TYPES.LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        userInfo: payload,
      };

    case TYPES.LOGIN_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
        userInfo: null,
      };

    //************Verify OTP Sates*************
    case TYPES.OTP_VERIFY_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        otp_verify: payload,
      };

    case TYPES.OTP_VERIFY_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
        otp_verify: null,
      };
    //************Social Login Sates*************

    case TYPES.SOCIAL_LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        userInfo: payload,
      };

    case TYPES.SOCIAL_LOGIN_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
        userInfo: null,
      };

    //************SignUp Sates*************

    case TYPES.SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        userInfo: payload,
      };
    case TYPES.SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
        userInfo: null,
      };

    //************Forgot Password Sates*************

    case TYPES.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: true,
        isSuccess: true,
        isFailure: false,
        forgotPassRes: payload,
      };
    case TYPES.FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
        forgotPassRes: null,
      };
    //************Reset Password Sates*************

    case TYPES.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: true,
        isSuccess: true,
        isFailure: false,
        resetPassRes: payload,
      };
    case TYPES.RESET_PASSWORD_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
        resetPassRes: null,
      };

    //************Logout Sates*************
    case TYPES.LOGOUT_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        userInfo: null,
      };

    case TYPES.LOGOUT_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
        userInfo: state?.userInfo,
      };
    //************Walkthrough Sates*************

    case TYPES.SET_WALKTHROUGH_SUCCESS:
      return {
        ...state,
        loading: false,
        walkthrough: payload,
      };
    default:
      return state;
  }
};
export default authReducer;
