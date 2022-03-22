import * as TYPES from '../types';

//Set Walkthrough Action
export const setProfileImage = params => {
  return {
    type: TYPES.SET_PROFILE_IMAGE_REQUEST,
    params,
  };
};
