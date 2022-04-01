import {takeLatest, put} from 'redux-saga/effects';
import {responseValidator} from '../../../shared/exporter';
import {
  creatingCustomExercise,
  getWeightLifted,
} from '../../../shared/service/ExerciseService';
import * as types from '../../actions/types';

// ************* Get Weight Sega**************
export function* getWeightLiftedRequest() {
  yield takeLatest(types.GET_LIFTED_WEIGHT_REQUEST, getTotalWightLifted);
  yield takeLatest(types.CUSTOM_EXERCISE_REQUEST, createCustomExerciseRequest);
}

function* getTotalWightLifted(params) {
  try {
    const res = yield getWeightLifted();
    if (res.data) {
      yield put({
        type: types.GET_LIFTED_WEIGHT_SUCCESS,
        payload: res.data,
      });
      params?.cbSuccess(res.data);
    } else {
      yield put({
        type: types.GET_LIFTED_WEIGHT_FAILURE,
        payload: null,
      });
      params?.cbFailure(res?.data);
    }
  } catch (error) {
    console.log(error);
    yield put({
      type: types.GET_LIFTED_WEIGHT_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}

// create custom exercise
function* createCustomExerciseRequest(params) {
  try {
    const res = yield creatingCustomExercise(params?.params);
    if (res.data) {
      yield put({
        type: types.CUSTOM_EXERCISE_SUCCESS,
        payload: res.data,
      });
      params?.cbSuccess(res.data);
    } else {
      yield put({
        type: types.CUSTOM_EXERCISE_FAILURE,
        payload: null,
      });
      params?.cbFailure(res?.data);
    }
  } catch (error) {
    console.log(error);
    yield put({
      type: types.CUSTOM_EXERCISE_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}
