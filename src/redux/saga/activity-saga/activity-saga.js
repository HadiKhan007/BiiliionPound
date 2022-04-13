import {takeLatest, put} from 'redux-saga/effects';
import {responseValidator} from '../../../shared/exporter';
import {
  getActivity,
  getFilteredActivity,
} from '../../../shared/service/ActivityService';
import * as types from '../../actions/types';

export function* getActivitiesRequest() {
  yield takeLatest(types.GET_ACTIVITY_REQUEST, getActivityRequest);
  yield takeLatest(
    types.GET_FILTERED_ACTIVITY_REQUEST,
    getFilteredActivityRequest,
  );
}

function* getActivityRequest(params) {
  try {
    const res = yield getActivity();
    if (res.data) {
      yield put({
        type: types.GET_ACTIVITY_SUCCESS,
        payload: res.data,
      });
      params?.cbSuccess(res.data);
    } else {
      yield put({
        type: types.GET_ACTIVITY_FAILURE,
        payload: null,
      });
      params?.cbFailure(res?.data);
    }
  } catch (error) {
    console.log(error);
    yield put({
      type: types.GET_ACTIVITY_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}

function* getFilteredActivityRequest(params) {
  try {
    const res = yield getFilteredActivity(params?.params?.key);
    if (res.data) {
      yield put({
        type: types.GET_FILTERED_ACTIVITY_SUCCESS,
        payload: res.data,
      });
      params?.cbSuccess(res.data);
    } else {
      yield put({
        type: types.GET_FILTERED_ACTIVITY_FAILURE,
        payload: null,
      });
      params?.cbFailure(res?.data);
    }
  } catch (error) {
    console.log(error);
    yield put({
      type: types.GET_FILTERED_ACTIVITY_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}
