import * as TYPES from '../types';

//Set Walkthrough Action
export const setProfileImage = params => {
  return {
    type: TYPES.SET_PROFILE_IMAGE_REQUEST,
    params,
  };
};

export const getProfile = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.GET_PROFILE_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};

export const updateUserProfile = (params, userId, cbSuccess, cbFailure) => {
  return {
    type: TYPES.UPDATE_PROFILE_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};

export const getTermsNConditions = (cbSuccess, cbFailure) => {
  return {
    type: TYPES.GET_TERMS_CONDITION_REQUEST,
    cbSuccess,
    cbFailure,
  };
};

export const getFAQRequest = (cbSuccess, cbFailure) => {
  return {
    type: TYPES.GET_FAQ_REQUEST,
    cbSuccess,
    cbFailure,
  };
};

export const getPrivacyPolicy = (cbSuccess, cbFailure) => {
  return {
    type: TYPES.GET_PRIVACY_POLICY_REQUEST,
    cbSuccess,
    cbFailure,
  };
};
