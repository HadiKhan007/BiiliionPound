import {takeLatest, put} from 'redux-saga/effects';
import {BASE_URL, ENDPOINTS, responseValidator} from '../../../shared/exporter';
import {getSubscriptions} from '../../../shared/service/SubscriptionsService';
import * as types from '../../actions/types';

//*************PROFILE IMAGE SEGA**************
export function* subscriptionsRequest() {
  yield takeLatest(types.GET_SUBSCRIPTIONS_REQUEST, getSubscriptionRequest);
}

//get profile data of the user
function* getSubscriptionRequest(params) {
  try {
    const response = yield getSubscriptions(params?.token);
    if (response.data) {
      yield put({
        type: types.GET_SUBSCRIPTIONS_SUCCESS,
        payload: response.data,
      });
      params?.cbSuccess(response.data);
    } else {
      yield put({
        type: types.GET_SUBSCRIPTIONS_FAILURE,
        payload: null,
      });
      params?.cbFailure(response?.data);
    }
  } catch (error) {
    yield put({
      type: types.GET_SUBSCRIPTIONS_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}
