import {put, takeLatest} from 'redux-saga/effects';
import * as types from '../../actions/types';
import {registerUser} from '../../../shared/service/AuthService';

export function* signUpRequest() {
  yield takeLatest(types.SIGNUP_REQUEST, signUp);
  yield takeLatest(types.SAVE_INFO_REQUEST, saveInfo);
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
    // yield put({type: types.SIGNUP_FAILURE, error: 'Network Error'});
  }
}

function* saveInfo(params) {
  // console.log('[signUp-saga]', params);
  try {
    let response = yield;
    params.cbSuccess(response);
    yield put({type: types.SAVE_INFO_SUCCESS, data: ''});
  } catch (error) {
    params.cbFailure(error.message);
    yield put({type: types.SAVE_INFO_FAILURE, error: 'Network Error'});
  }
}
