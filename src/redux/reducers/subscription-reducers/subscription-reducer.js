import * as TYPES from '../../actions/types';

const initialState = {
  loading: false,
  isSuccess: false,
  isFailure: false,
  subscriptions: null,
};
const subscriptionsReducer = (state = initialState, actions) => {
  const {type, payload} = actions;
  switch (type) {
    //************Get subscriptions*************
    case TYPES.SET_PROFILE_IMAGE:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        subscriptions: payload,
      };
    default:
      return state;
  }
};
export default subscriptionsReducer;
