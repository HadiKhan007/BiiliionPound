import * as TYPES from '../../actions/types';

const initialState = {
  loading: false,
  isSuccess: false,
  isFailure: false,
  upcoming_events: [],
  ongoing_events: [],
  event_detail: null,
  payment_card_list: [],
  pay_with_debit: null,
  pay_with_social: null,
  join_event: null,
  join_team_event: null,
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

    //************JOIN EVENTS*************
    case TYPES.JOIN_EVENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        join_event: payload,
      };

    case TYPES.JOIN_EVENTS_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
        join_event: null,
      };

    //************JOIN TEAM EVENTS*************
    case TYPES.JOIN_TEAM_EVENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        join_team_event: payload,
      };

    case TYPES.JOIN_TEAM_EVENTS_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
        join_team_event: null,
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

    case TYPES.SET_EVENT_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        event_detail: payload?.event,
      };

    //************GET PAYMENT CARDS*************
    case TYPES.GET_CARD_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        payment_card_list: payload,
      };

    case TYPES.GET_CARD_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
        payment_card_list: null,
      };

    //************Add Debit Card*************
    case TYPES.ADD_CARD_SUCCESS:
      // console.log('payload', payload);
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        payment_card_list: [...state.payment_card_list, payload?.card],
      };

    case TYPES.ADD_CARD_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
        payment_card_list: state.payment_card_list,
      };

    //************Pay With Debit Card*************
    case TYPES.PAY_WITH_DEBIT_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        pay_with_debit: payload,
      };

    case TYPES.PAY_WITH_DEBIT_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        pay_with_debit: null,
      };
    //************Pay With Google Card*************
    case TYPES.PAY_WITH_SOCIAL_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        pay_with_social: payload,
      };

    case TYPES.PAY_WITH_SOCIAL_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        pay_with_social: null,
      };

    default:
      return state;
  }
};
export default eventReducer;
