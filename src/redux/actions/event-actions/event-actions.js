import * as TYPES from '../types';

//Get Upcoming Evenets
export const get_upcoming_event_request = (cbSuccess, cbFailure) => {
  return {
    type: TYPES.GET_UPCOMING_EVENTS_REQUEST,
    cbSuccess,
    cbFailure,
  };
};

//Get Ongoing Evenets
export const get_ongoing_event_request = (cbSuccess, cbFailure) => {
  return {
    type: TYPES.GET_ONGOING_EVENTS_REQUEST,
    cbSuccess,
    cbFailure,
  };
};

//Set Upcoming Evenets
export const set_upcoming_event_request = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.SET_UPCOMING_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};

//Set Ongoing Evenets
export const set_ongoing_event_request = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.SET_ONGOING_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};
