import * as TYPES from '../../actions/types';

const initialState = {
  loading: false,
  isSuccess: false,
  isFailure: false,
  lifted_weight: null,
};
const exerciseReducer = (state = initialState, actions) => {
  const {type, payload} = actions;
  switch (type) {
    //************Login Sates*************
    case TYPES.GET_LIFTED_WEIGHT_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        lifted_weight: payload,
      };

    case TYPES.GET_LIFTED_WEIGHT_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
        lifted_weight: null,
      };

    default:
      return state;
  }
};
export default exerciseReducer;
