import * as TYPES from '../../actions/types';

const initialState = {
  loading: false,
  isSuccess: false,
  isFailure: false,
  profile_image: null,
  userData: null,
  terms: null,
  faqs: null,
  policy: null,
};
const profileReducer = (state = initialState, actions) => {
  const {type, payload} = actions;
  switch (type) {
    //************Profile Image*************
    case TYPES.SET_PROFILE_IMAGE:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        profile_image: payload,
      };
    case TYPES.GET_PROFILE_SUCCESS:
      return {
        ...state,
        profile_image: payload?.profile_image,
        userData: payload,
      };
    case TYPES.UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        profile_image: payload?.profile_image,
        userData: payload,
      };
    case TYPES.GET_FAQ_SUCCESS:
      return {
        ...state,
        faqs: payload,
      };
    case TYPES.GET_PRIVACY_POLICY_SUCCESS:
      return {
        ...state,
        policy: payload,
      };
    case TYPES.GET_TERMS_CONDITION_SUCCESS:
      return {
        ...state,
        terms: payload,
      };
    default:
      return state;
  }
};
export default profileReducer;
