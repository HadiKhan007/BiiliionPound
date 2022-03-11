import axios from 'axios';
import {takeLatest, put} from 'redux-saga/effects';
import {BASE_URL} from '../../../shared/exporter';
import {loginUser} from '../../../shared/service/AuthService';
import * as types from '../../actions/types';

export function* loginRequest() {
  yield takeLatest(types.LOGIN_REQUEST_REQUEST, login);
}

function* login(params) {
  try {
    // loginUser(params?.params)
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    // console.log('response - - - > >> > ', response);
    // params.cbSuccess(response);
    // yield put({type: types.LOGIN_REQUEST_SUCCESS, data: response.user});
  } catch (error) {
    console.log(error);
    // console.log('error from login request saga -- > > >  > ', error);
    // params.cbFailure(error.message);
    // yield put({type: types.LOGIN_REQUEST_FAILURE, data: error.message});
  }
}
