import {takeLatest, put} from 'redux-saga/effects';
import {BASE_URL, ENDPOINTS, responseValidator} from '../../../shared/exporter';
import {
  getFaqs,
  getPrivacyPolicy,
  getTermsConditions,
  getUserData,
  updateUserData,
} from '../../../shared/service/ProfileService';
import * as types from '../../actions/types';
import axios from 'axios';

//*************PROFILE IMAGE SEGA**************
export function* setProfileImageRequest() {
  yield takeLatest(types.SET_PROFILE_IMAGE_REQUEST, setprofileImage);
  yield takeLatest(types.GET_PROFILE_REQUEST, getProfileRequest);
  yield takeLatest(types.UPDATE_PROFILE_REQUEST, updateProfileRequest);
  yield takeLatest(types.GET_FAQ_REQUEST, getFaqRequest);
  yield takeLatest(types.GET_TERMS_CONDITION_REQUEST, getTermsCondition);
  yield takeLatest(types.GET_PRIVACY_POLICY_REQUEST, getPrivacyPolicyRequest);
}

function* setprofileImage(params) {
  try {
    yield put({
      type: types.SET_PROFILE_IMAGE,
      payload: params?.params,
    });
  } catch (error) {}
}

//get profile data of the user
function* getProfileRequest(params) {
  try {
    const response = yield getUserData(params?.params);
    if (response.data) {
      yield put({
        type: types.GET_PROFILE_SUCCESS,
        payload: response.data,
      });
      params?.cbSuccess(response.data);
    } else {
      yield put({
        type: types.GET_PROFILE_FAILURE,
        payload: null,
      });
      params?.cbFailure(response?.data);
    }
  } catch {
    yield put({
      type: types.GET_PROFILE_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}

//get profile data of the user
function* updateProfileRequest(params) {
  try {
    const response = yield updateUserData(
      params?.userId?.user?.id,
      params?.params,
    );
    if (response.data) {
      yield put({
        type: types.UPDATE_PROFILE_SUCCESS,
        payload: response.data,
      });

      params?.cbSuccess(response.data);
    } else {
      yield put({
        type: types.UPDATE_PROFILE_FAILURE,
        payload: null,
      });
      params?.cbFailure(response?.data);
    }
  } catch {
    yield put({
      type: types.UPDATE_PROFILE_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}

function* getFaqRequest(params) {
  try {
    const response = yield getFaqs();
    if (response.data) {
      console.log('====================================');
      console.log('response of edit', response?.data);
      console.log('====================================');

      let array = response?.data;
      array.forEach(element => {
        element.expanded = false;
      });
      console.log('====================================');
      console.log(array);
      console.log('====================================');
      yield put({
        type: types.GET_FAQ_SUCCESS,
        payload: array,
      });
      console.log('====================================');
      console.log('response of edit', response?.data);
      console.log('====================================');
      params?.cbSuccess(array);
    } else {
      yield put({
        type: types.GET_FAQ_FAILURE,
        payload: null,
      });
      params?.cbFailure(response?.data);
    }
  } catch {
    yield put({
      type: types.GET_FAQ_FAILURE,
      payload: null,
    });
    // let msg = responseValidator(error?.response?.status, error?.response?.data);
    // params?.cbFailure(msg);
  }
}

function* getTermsCondition(params) {
  try {
    const response = yield getTermsConditions();
    if (response.data) {
      console.log('====================================');
      console.log('response of edit', response?.data);
      console.log('====================================');

      yield put({
        type: types.GET_TERMS_CONDITION_SUCCESS,
        payload: response?.data,
      });
      console.log('====================================');
      console.log('response of edit', response?.data);
      console.log('====================================');
      params?.cbSuccess(response?.data);
    } else {
      yield put({
        type: types.GET_TERMS_CONDITION_FAILURE,
        payload: null,
      });
      params?.cbFailure(response?.data);
    }
  } catch {
    yield put({
      type: types.GET_TERMS_CONDITION_FAILURE,
      payload: null,
    });
    // let msg = responseValidator(error?.response?.status, error?.response?.data);
    // params?.cbFailure(msg);
  }
}

function* getPrivacyPolicyRequest(params) {
  try {
    const response = yield getPrivacyPolicy();
    if (response.data) {
      yield put({
        type: types.GET_PRIVACY_POLICY_SUCCESS,
        payload: response?.data,
      });
      console.log('====================================');
      console.log('response of DATA', response?.data);
      console.log('====================================');
      params?.cbSuccess(response?.data);
    } else {
      yield put({
        type: types.GET_PRIVACY_POLICY_FAILURE,
        payload: null,
      });
      params?.cbFailure(response?.data);
    }
  } catch {
    yield put({
      type: types.GET_PRIVACY_POLICY_FAILURE,
      payload: null,
    });
    // let msg = responseValidator(error?.response?.status, error?.response?.data);
    // params?.cbFailure(msg);
  }
}
