import {takeLatest, put} from 'redux-saga/effects';
import {responseValidator} from '../../../shared/exporter';
import * as types from '../../actions/types';
//*************PROFILE IMAGE SEGA**************
export function* setProfileImageRequest() {
  yield takeLatest(types.SET_PROFILE_IMAGE_REQUEST, setprofileImage);
}
function* setprofileImage(params) {
  try {
    yield put({
      type: types.SET_PROFILE_IMAGE,
      payload: params?.params,
    });
  } catch (error) {}
}
