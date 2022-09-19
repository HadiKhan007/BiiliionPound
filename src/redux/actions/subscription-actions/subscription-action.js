import * as TYPES from '../types';

export const getSubscriptions = (token, cbSuccess, cbFailure) => {
  return {
    type: TYPES.GET_SUBSCRIPTIONS_REQUEST,
    token,
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
