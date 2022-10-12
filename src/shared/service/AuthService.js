import {ENDPOINTS, HTTP_CLIENT, BASE_URL} from '../exporter';
//Authentication Requests
export const registerUser = params => {
  return HTTP_CLIENT.post(ENDPOINTS.REGISTER, params);
};
export const loginUser = params => {
  return HTTP_CLIENT.post(ENDPOINTS.LOGIN, params);
};
export const socialLogin = (logintype, params) => {
  return HTTP_CLIENT.post(
    `${
      logintype == 'google'
        ? ENDPOINTS.GOOGLE_SIGN_IN
        : ENDPOINTS?.APPLE_SIGN_IN
    }`,
    params,
  );
};
export const forgotPassword = params => {
  return HTTP_CLIENT.post(ENDPOINTS.FORGOT_PASS, params);
};
export const OTPVerify = params => {
  return HTTP_CLIENT.post(ENDPOINTS.VERIFY_OTP, params);
};
export const resetPassword = params => {
  return HTTP_CLIENT.post(ENDPOINTS.RESET_PASS, params);
};
export const logoutUser = () => {
  return HTTP_CLIENT.post(ENDPOINTS.LOGOUT);
};

export const deleteUser = () => {
  return HTTP_CLIENT.delete(ENDPOINTS.DELETE_USER);
};

export const selctedUserMode = async (userMode, token) => {
  let selctedMode = userMode === 'weight-mode' ? 'exercise' : 'pedometer';
  return HTTP_CLIENT.post(
    `${ENDPOINTS.SELECT_USER_MODE}?mode=${selctedMode}`,
    {},
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    },
  );
};

export const userpersonalInformation = async (params, token) => {
  return HTTP_CLIENT.post(`${ENDPOINTS.PERSONAL_INFO}`, params, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  });
};

export const getPersonalInformation = async token => {
  return HTTP_CLIENT.get(`${ENDPOINTS.PERSONAL_INFO}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  });
};

export const updateUserpersonalInformation = async (params, token) => {
  return HTTP_CLIENT.patch(`${ENDPOINTS.PERSONAL_INFO}`, params, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  });
};
