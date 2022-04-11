import {takeLatest, put} from 'redux-saga/effects';
import {responseValidator} from '../../../shared/exporter';
import {
  createExerWorkout,
  creatingCustomExercise,
  getAllExer,
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

// ************* Set  Filter Sega**************
export function* setFilterExerciseRequest() {
  yield takeLatest(types.SET_FILTERED_EXERCISE_REQUEST, setFilteredExercise);
}

function* setFilteredExercise(params) {
  try {
    yield put({
      type: types.SET_FILTERED_EXERCISE_SUCCESS,
      payload: params?.params,
    });
  } catch (error) {
    console.log(error);
  }
}

// ************* Get  Filter Sega**************

export function* getExerciseRequest() {
  yield takeLatest(types.GET_EXERCISE_REQUEST, getExercises);
}
function* getExercises(params) {
  try {
    const res = yield getAllExer(params?.params);
    if (res.data) {
      yield put({
        type: types.GET_EXERCISE_SUCCESS,
        payload: res.data,
      });
      params?.cbSuccess(res.data);
    } else {
      yield put({
        type: types.GET_EXERCISE_FAILURE,
        payload: null,
      });
      params?.cbFailure(res?.data);
    }
  } catch (error) {
    console.log(error);
    yield put({
      type: types.GET_EXERCISE_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}

export function* getFilteredExerciseRequest() {
  yield takeLatest(types.GET_FILTERED_EXERCISE_REQUEST, getFilteredExercises);
}
function* getFilteredExercises(params) {
  try {
    const res = yield getAllFilterExer();
    if (res.data) {
      yield put({
        type: types.GET_FILTERED_EXERCISE_SUCCESS,
        payload: res.data,
      });
      params?.cbSuccess(res.data);
    } else {
      yield put({
        type: types.GET_FILTERED_EXERCISE_FAILURE,
        payload: null,
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

export function* setExerciseScreenRequest() {
  yield takeLatest(types.SET_EXERCISE_SCREEN_REQUEST, setExerciseScreen);
}

function* setExerciseScreen(params) {
  try {
    yield put({
      type: types.SET_EXERCISE_SCREEN,
      payload: params?.params,
    });
    params?.cbSuccess();
  } catch (error) {}
}

//Set Exercise Item
export function* setExerciseItemRequest() {
  yield takeLatest(types.SET_EXERCISE_ITEM_REQUEST, setExerciseItem);
}

function* setExerciseItem(params) {
  try {
    yield put({
      type: types.SET_EXERCISE_ITEM_SUCCESS,
      payload: params?.params,
    });
    params?.cbSuccess();
  } catch (error) {}
}

//Set Recent Search Item
export function* setRecentSearchRequest() {
  yield takeLatest(types.SET_RECENT_SEARCHES_REQUEST, setRecentSearch);
}

function* setRecentSearch(params) {
  try {
    yield put({
      type: types.SET_RECENT_SEARCHES_SUCCESS,
      payload: params?.params,
    });
    params?.cbSuccess();
  } catch (error) {}
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

// *************Create Exercise Workout Sega**************

export function* createExerciseWorkoutRequest() {
  yield takeLatest(
    types.CREATE_EXERCISE_WORKOUT_REQUEST,
    createExerciseWorkout,
  );
}
function* createExerciseWorkout(params) {
  try {
    const res = yield createExerWorkout(params?.params);
    if (res.data) {
      yield put({
        type: types.CREATE_EXERCISE_WORKOUT_SUCCESS,
        payload: res.data,
      });
      params?.cbSuccess(res.data);
    } else {
      yield put({
        type: types.CREATE_EXERCISE_WORKOUT_FAILURE,
        payload: null,
      });
      params?.cbFailure(res?.data);
    }
  } catch (error) {
    console.log(error);
    yield put({
      type: types.CREATE_EXERCISE_WORKOUT_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}
