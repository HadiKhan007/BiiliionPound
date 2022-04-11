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
export const set_event_request = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.SET_EVENT_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};

//get Payment Cards
export const get_payment_cards_request = (cbSuccess, cbFailure) => {
  return {
    type: TYPES.GET_CARD_LIST_REQUEST,
    cbSuccess,
    cbFailure,
  };
};
//Set Payment
export const add_card_request = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.ADD_CARD_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};

//Pay with Debit
export const pay_with_debit_request = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.PAY_WITH_DEBIT_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};

//Pay with Google
export const pay_with_social_request = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.PAY_WITH_SOCIAL_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};

//Join Team Event
export const join_event_team_request = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.JOIN_TEAM_EVENTS_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};
//Join Event
export const join_event_request = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.JOIN_EVENTS_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};
