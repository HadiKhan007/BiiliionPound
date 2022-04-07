import {takeLatest, put} from 'redux-saga/effects';
import {responseValidator} from '../../../shared/exporter';
import {
  creatingCustomExercise,
  getFilterExer,
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

// ************* Get  Filter Sega**************
export function* getFilterExerciseRequest() {
  yield takeLatest(types.GET_FILTERED_EXERCISE_REQUEST, getFilteredExercise);
}

function* getFilteredExercise(params) {
  try {
    const res = yield getFilterExer(params?.params);
    if (res.data) {
      yield put({
        type: types.GET_FILTERED_EXERCISE_SUCCESS,
        payload: res.data,
      });
      params?.cbSuccess(res.data);
    } else {
      yield put({
        type: types.GET_FILTERED_EXERCISE_SUCCESS,
        payload: res.data,
      });
      params?.cbFailure(res?.data);
    }
  } catch (error) {
    console.log(error);
    yield put({
      type: types.GET_FILTERED_EXERCISE_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}

// ************* Get  Filter Sega**************

export function* getExerciseRequest() {
  yield takeLatest(types.GET_FILTERED_EXERCISE_REQUEST, getExercises);
}

function* getExercises(params) {
  try {
    const res = yield getFilterExer(params?.params);
    if (res.data) {
      yield put({
        type: types.GET_FILTERED_EXERCISE_SUCCESS,
        payload: res.data,
      });
      params?.cbSuccess(res.data);
    } else {
      yield put({
        type: types.GET_FILTERED_EXERCISE_SUCCESS,
        payload: res.data,
      });
      params?.cbFailure(res?.data);
    }
  } catch (error) {
    console.log(error);
    yield put({
      type: types.GET_FILTERED_EXERCISE_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}

// ************* SET  Filter Sega**************
export function* setfilteredCategoryExerciseRequest() {
  yield takeLatest(types.SET_CATEGORY_FILTERED_REQUEST, setFilteredCategory);
}

function* setFilteredCategory(params) {
  try {
    yield put({
      type: types.SET_CATEGORY_FILTERED_SUCCESS,
      payload: params?.params,
    });
    params?.cbSuccess();
  } catch (error) {
    console.log(error);
  }
}

// ************* Get  Filter Sega**************
export function* setfilteredBodyExerciseRequest() {
  yield takeLatest(types.SET_BODY_FILTERED_REQUEST, setFilteredBody);
}

function* setFilteredBody(params) {
  try {
    yield put({
      type: types.SET_BODY_FILTERED_SUCCESS,
      payload: params?.params,
    });
    params?.cbSuccess();
  } catch (error) {
    console.log(error);
  }
}

// ************* Select  Filter Sega**************
export function* selectfilteredCategoryExerciseRequest() {
  yield takeLatest(
    types.SELECT_CATEGORY_FILTER_REQUEST,
    selectFilteredCategory,
  );
}

function* selectFilteredCategory(params) {
  try {
    yield put({
      type: types.SELECT_CATEGORY_FILTER_SUCCESS,
      payload: params?.params,
    });
  } catch (error) {
    console.log(error);
  }
}

// ************* Get  Filter Sega**************
export function* selectfilteredBodyExerciseRequest() {
  yield takeLatest(types.SELECT_BODY_FILTER_REQUEST, selectFilteredBody);
}

function* selectFilteredBody(params) {
  try {
    yield put({
      type: types.SELECT_BODY_FILTER_SUCCESS,
      payload: params?.params,
    });
  } catch (error) {
    console.log(error);
  }
}
