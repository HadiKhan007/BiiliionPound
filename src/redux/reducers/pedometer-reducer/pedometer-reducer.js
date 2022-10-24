import * as TYPES from '../../actions/types';

const initialState = {
  loading: false,
  isSuccess: false,
  isFailure: false,
  pedometerData: null,
};
const pedomterReducer = (state = initialState, actions) => {
  const {type, payload} = actions;
  switch (type) {
    //************pedometer Sates*************
    case TYPES.PEDOMETER_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        pedometerData: payload,
      };

    case TYPES.PEDOMETER_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
        pedometerData: null,
      };

    default:
      return state;
  }
};
export default pedomterReducer;
