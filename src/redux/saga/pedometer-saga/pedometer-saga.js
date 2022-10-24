import {put, takeLatest} from 'redux-saga/effects';
import {responseValidator} from '../../../shared/exporter';
import * as types from '../../actions/types';
import {stepsCounts} from '../../../shared/service/PedometerServices';

// *************Pedometer Sega**************
export function* pedometerDataRequest() {
  yield takeLatest(types.PEDOMETER_REQUEST, stepsCountsAndCal);
}
function* stepsCountsAndCal(params) {
  console.log(params);
  try {
    const res = yield stepsCounts(params?.params, params?.token);
    if (res.data) {
      yield put({
        type: types.PEDOMETER_REQUEST_SUCCESS,
        payload: res.data,
      });

      params?.cbSuccess(res.data);
    } else {
      yield put({
        type: types.PEDOMETER_REQUEST_FAILURE,
        payload: null,
      });
      params?.cbFailure(res?.data);
      console.log('==============pedometer failed======================');
      console.log(res?.data);
      console.log('====================================');
    }
  } catch (error) {
    yield put({
      type: types.PEDOMETER_REQUEST_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}
