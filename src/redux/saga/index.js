import {fork} from 'redux-saga/effects';

import {
  forgotPassRequest,
  loginRequest,
  signUpRequest,
  walkthroughRequest,
  resetPassRequest,
  socialLoginRequest,
  logoutRequestSega,
  OTPVerifyRequest,
} from './auth-saga/auth-sega';
import {setProfileImageRequest} from './profile-sega/profile-sega';

export function* rootSaga() {
  yield fork(loginRequest);
  yield fork(signUpRequest);
  yield fork(walkthroughRequest);
  yield fork(forgotPassRequest);
  yield fork(resetPassRequest);
  yield fork(socialLoginRequest);
  yield fork(logoutRequestSega);
  yield fork(OTPVerifyRequest);
  yield fork(setProfileImageRequest);
}
