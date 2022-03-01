import {ENDPOINTS, HTTP_CLIENT} from '../exporter';

export const registerUser = params => {
  return HTTP_CLIENT.post(ENDPOINTS.REGISTER, params);
};

export const loginUser = params => {
  return HTTP_CLIENT.post(ENDPOINTS.LOGIN, params);
};

export const logoutUser = () => {
  return HTTP_CLIENT.post(ENDPOINTS.LOGOUT);
};
