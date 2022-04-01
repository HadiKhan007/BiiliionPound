import {retry} from 'redux-saga/effects';
import {HTTP_CLIENT, ENDPOINTS} from '../exporter';
import axios from 'axios';

export const getUserData = params => {
  return HTTP_CLIENT.get(`${ENDPOINTS.PROFILE}/${params}`);
};

export const updateUserData = (id, params) => {
  console.log(id, params);
  return HTTP_CLIENT.put(`${ENDPOINTS.PROFILE}/${id}`, params);
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
