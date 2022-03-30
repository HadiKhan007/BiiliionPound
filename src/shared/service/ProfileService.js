import {HTTP_CLIENT, ENDPOINTS} from '../exporter';

export const getUserData = params => {
  return HTTP_CLIENT.get(`${ENDPOINTS.PROFILE(params)}`);
};

export const updateUserData = params => {
  console.log('=============Http Params======================');
  console.log(params);
  console.log('====================================');

  return HTTP_CLIENT.put(
    `${ENDPOINTS.PROFILE(params?.userId)}`,
    params?.params,
  );
};

export const getFaqs = () => {
  return HTTP_CLIENT.get(ENDPOINTS.FAQ);
};

export const getTermsConditions = () => {
  return HTTP_CLIENT.get(ENDPOINTS.TERMS_CONDITION);
};

export const getPrivacyPolicy = () => {
  return HTTP_CLIENT.get(ENDPOINTS.PRIVACY_POLICY);
};
