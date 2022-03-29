import * as TYPES from '../../actions/types';

const initialState = {
  loading: false,
  isSuccess: false,
  isFailure: false,
  upcoming_events: [],
  ongoing_events: [],
  upcoming_event_detail: null,
  ongoing_event_detail: null,
};
const eventReducer = (state = initialState, actions) => {
  const {type, payload} = actions;
  switch (type) {
    //************GET UPCOMING EVENTS*************
    case TYPES.GET_UPCOMING_EVENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        upcoming_events: payload,
      };

    case TYPES.GET_UPCOMING_EVENTS_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
        upcoming_events: null,
      };
    //************GET ONGOING EVENTS*************
    case TYPES.GET_ONGOING_EVENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        ongoing_events: payload,
      };

    case TYPES.GET_ONGOING_EVENTS_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
        ongoing_events: null,
      };

    //************SET EVENTS*************
    case TYPES.SET_UPCOMING_EVENT:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        upcoming_event_detail: payload,
      };

    case TYPES.SET_ONGOING_EVENT:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        ongoing_event_detail: null,
      };
    default:
      return state;
  }
};
export default eventReducer;
