import * as TYPES from '../types';

export const getActivity = (cbSuccess, cbFailure) => {
  return {
    type: TYPES.GET_ACTIVITY_REQUEST,
    cbSuccess,
    cbFailure,
  };
};

export const getFilteredActivity = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.GET_FILTERED_ACTIVITY_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};
