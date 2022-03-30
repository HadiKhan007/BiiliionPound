import {takeLatest, put} from 'redux-saga/effects';
import {responseValidator} from '../../../shared/exporter';
import {
  getUpcomingEvent,
  getOngoingEvent,
  addDebitCard,
} from '../../../shared/service/EventService';
import * as types from '../../actions/types';

// *************GET UPCOMING EVENTS SEGA**************
export function* getUpcomingEventRequest() {
  yield takeLatest(types.GET_UPCOMING_EVENTS_REQUEST, getUpcomingEvents);
}
function* getUpcomingEvents(params) {
  try {
    const res = yield getUpcomingEvent();
    if (res.data) {
      yield put({
        type: types.GET_UPCOMING_EVENTS_SUCCESS,
        payload: res.data,
      });
      params?.cbSuccess(res.data);
    } else {
      yield put({
        type: types.GET_UPCOMING_EVENTS_FAILURE,
        payload: null,
      });
      params?.cbFailure(res?.data);
    }
  } catch (error) {
    console.log(error);
    yield put({
      type: types.GET_UPCOMING_EVENTS_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}

// *************GET ONGOING EVENTS SEGA**************
export function* getOngoingEventRequest() {
  yield takeLatest(types.GET_ONGOING_EVENTS_REQUEST, getOngoingEvents);
}
function* getOngoingEvents(params) {
  try {
    const res = yield getOngoingEvent();
    if (res.data) {
      yield put({
        type: types.GET_ONGOING_EVENTS_SUCCESS,
        payload: res.data,
      });
      params?.cbSuccess(res.data);
    }
  } catch (error) {
    console.log(error);
    yield put({
      type: types.GET_ONGOING_EVENTS_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}

// *************SET UPCOMING EVENTS SEGA**************
export function* setUpcomingEventRequest() {
  yield takeLatest(types.SET_UPCOMING_REQUEST, setUpcomingEvent);
}
function* setUpcomingEvent(params) {
  try {
    yield put({
      type: types.SET_UPCOMING_EVENT,
      payload: params?.params,
    });
    params?.cbSuccess();
  } catch (error) {
    console.log(error);
    params?.cbFailure();
  }
}

// *************SET ONGOING EVENTS SEGA**************
export function* setOngoingEventRequest() {
  yield takeLatest(types.SET_ONGOING_REQUEST, setOngoingEvent);
}
function* setOngoingEvent(params) {
  try {
    yield put({
      type: types.SET_ONGOING_EVENT,
      payload: params?.params,
    });
    params?.cbSuccess();
  } catch (error) {
    console.log(error);
    params?.cbFailure();
  }
}

// *************ADD CARD SEGA**************
export function* addcardRequest() {
  yield takeLatest(types.ADD_CARD_REQUEST, addCard);
}
function* addCard(params) {
  try {
    const res = yield addDebitCard(params?.params);
    if (res.data) {
      yield put({
        type: types.ADD_CARD_SUCCESS,
        payload: res.data,
      });
      params?.cbSuccess(res.data);
    }
  } catch (error) {
    console.log(error);
    // yield put({
    //   type: types.ADD_CARD_FAILURE,
    //   payload: null,
    // });

    // let msg = responseValidator(error?.response?.status, error?.response?.data);
    // params?.cbFailure(msg);
  }
}
