import * as TYPES from '../../actions/types';

const initialState = {
  loading: false,
  isSuccess: false,
  isFailure: false,
  activity: null,
};
const activityReducer = (state = initialState, actions) => {
  const {type, payload} = actions;
  switch (type) {
    //*******get activities*************/
    case TYPES.GET_FILTERED_ACTIVITY_SUCCESS:
      return {
        ...state,
        activity: payload,
      };
    case TYPES.GET_ACTIVITY_SUCCESS:
      return {
        ...state,
        activity: payload,
      };
    default:
      return state;
  }
};
export default activityReducer;
