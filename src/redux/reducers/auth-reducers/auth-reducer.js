import * as TYPES from '../../actions/types';

const initialState = {
  loading: false,
  isKeepLogin: null,
  user: null,
  error: null,
  isSuccess: false,
  isFailure: false,
};
const authReducer = (state = initialState, actions) => {
  const {payload, type} = actions;
  switch (type) {
    case TYPES.LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        loading: true,
        user: payload,
        isKeepLogin: true,
        isSuccess: true,
        isFailure: false,
      };
    case TYPES.LOGIN_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        isKeepLogin: false,
        isSuccess: false,
        isFailure: true,
        user: null,
      };

    default:
      return state;
  }
};
export default authReducer;
