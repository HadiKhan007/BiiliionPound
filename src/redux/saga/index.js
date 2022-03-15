import {fork} from 'redux-saga/effects';

import {
  forgotPassRequest,
  loginRequest,
  signUpRequest,
  walkthroughRequest,
  resetPassRequest,
} from './auth-saga/auth-sega';

export function* rootSaga() {
  yield fork(loginRequest);
  yield fork(signUpRequest);
  yield fork(walkthroughRequest);
  yield fork(forgotPassRequest);
  yield fork(resetPassRequest);
}
