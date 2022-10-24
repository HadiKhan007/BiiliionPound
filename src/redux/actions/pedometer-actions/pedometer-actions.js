import * as TYPES from '../types';

export const pedometerRequest = (params, token, cbSuccess, cbFailure) => {
  return {
    type: TYPES.PEDOMETER_REQUEST,
    params,
    token,
    cbSuccess,
    cbFailure,
  };
};
