import * as TYPES from '../../actions/types';

const initialState = {
  loading: false,
  isSuccess: false,
  isFailure: false,
  profile_image: null,
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

    default:
      return state;
  }
};
export default profileReducer;
