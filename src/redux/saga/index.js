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
import {getWeightLiftedRequest} from './exercise-sega/exercise-sega';
import {
  addcardRequest,
  getOngoingEventRequest,
  getPaymentCardRequest,
  getUpcomingEventRequest,
  payWithDebitRequest,
  payWithSocialAccountRequest,
  setOngoingEventRequest,
  setUpcomingEventRequest,
} from './event-sega/event-sega';

import {getActivitiesRequest} from './activity-saga/activity-saga';

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
  yield fork(getWeightLiftedRequest);
  yield fork(getUpcomingEventRequest);
  yield fork(getOngoingEventRequest);
  yield fork(setUpcomingEventRequest);
  yield fork(setOngoingEventRequest);
  yield fork(getActivitiesRequest);
  yield fork(addcardRequest);
  yield fork(getPaymentCardRequest);
  yield fork(payWithDebitRequest);
  yield fork(payWithSocialAccountRequest);
}
