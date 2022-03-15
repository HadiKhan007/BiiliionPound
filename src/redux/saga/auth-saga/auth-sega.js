import axios from 'axios';
import {takeLatest, put} from 'redux-saga/effects';
import {
  forgotPassword,
  loginUser,
  registerUser,
  resetPassword,
} from '../../../shared/service/AuthService';
import * as types from '../../actions/types';

// *************Login Sega**************

export function* loginRequest() {
  yield takeLatest(types.LOGIN_REQUEST_REQUEST, login);
}
function* login(params) {
  try {
    const res = yield loginUser(params?.params);
    if (res.data) {
      yield put({
        type: types.LOGIN_REQUEST_SUCCESS,
        payload: res.data,
      });
      params?.cbSuccess(res.data);
    } else {
      yield put({
        type: types.LOGIN_REQUEST_FAILURE,
        payload: null,
      });
      params?.cbFailure(error);
    }
  } catch (error) {
    console.log(error);
    yield put({
      type: types.LOGIN_REQUEST_FAILURE,
      payload: null,
    });
    params?.cbFailure(error);
  }
}
// *************Sign Up Sega**************

export function* signUpRequest() {
  yield takeLatest(types.SIGNUP_REQUEST, signUp);
}

function* signUp(params) {
  try {
    registerUser(params?.params)
      .then(res => {
        console.log(res?.data);
        params?.cbSuccess(res.data);
      })
      .catch(error => {
        params?.cbFailure(error);
      });
  } catch (error) {
    params.cbFailure(error);
  }
}

// *************Forgot Sega**************

export function* forgotPassRequest() {
  yield takeLatest(types.FORGOT_PASSWORD_REQUEST, forgot);
}

function* forgot(params) {
  try {
    console.log(params?.params);
    const res = yield forgotPassword(params?.params);
    if (res.data) {
      yield put({
        type: types.FORGOT_PASSWORD_SUCCESS,
        payload: {...params?.params, ...res?.data},
      });
      params?.cbSuccess(res.data);
    } else {
      yield put({
        type: types.FORGOT_PASSWORD_FAILURE,
        payload: null,
      });
      params?.cbFailure(error);
    }
  } catch (error) {
    yield put({
      type: types.FORGOT_PASSWORD_FAILURE,
      payload: null,
    });
    params.cbFailure(error);
  }
}
// *************Reset Password Sega**************

export function* resetPassRequest() {
  yield takeLatest(types.RESET_PASSWORD_REQUEST, resetPass);
}

function* resetPass(params) {
  try {
    const res = yield resetPassword(params?.params);
    if (res.data) {
      yield put({
        type: types.RESET_PASSWORD_SUCCESS,
        payload: res.data,
      });
      params?.cbSuccess(res.data);
    } else {
      yield put({
        type: types.RESET_PASSWORD_FAILURE,
        payload: null,
      });
      params?.cbFailure(error);
    }
  } catch (error) {
    yield put({
      type: types.RESET_PASSWORD_FAILURE,
      payload: null,
    });
    params.cbFailure(error);
  }
}

//*************Walkthrough SEGA**************
export function* walkthroughRequest() {
  yield takeLatest(types.SET_WALKTHROUGH_REQUEST, set_walkthrough);
}
function* set_walkthrough(params) {
  try {
    yield put({
      type: types.SET_WALKTHROUGH_SUCCESS,
      payload: params?.params,
    });
  } catch (error) {}
}
