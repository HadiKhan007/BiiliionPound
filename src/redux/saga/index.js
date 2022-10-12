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
  deleteRequestSaga,
  selectModeRequestSaga,
  userInfoRequestSaga,
  UpdateUserInfoRequestSaga,
  getUserInfoRequestSaga,
} from './auth-saga/auth-sega';
import {setProfileImageRequest} from './profile-sega/profile-sega';
import {
  createExerciseWorkoutRequest,
  getExerciseRequest,
  setFilterExerciseRequest,
  getWeightLiftedRequest,
  selectfilteredBodyExerciseRequest,
  selectfilteredCategoryExerciseRequest,
  setExerciseItemRequest,
  setExerciseScreenRequest,
  setfilteredBodyExerciseRequest,
  setfilteredCategoryExerciseRequest,
  getFilteredExerciseRequest,
  setRecentSearchRequest,
  getNotificationListRequest,
  deleteNotificationRequest,
  saveDeviceTokenRequest,
} from './exercise-sega/exercise-sega';
import {
  addcardRequest,
  getOngoingEventRequest,
  getPaymentCardRequest,
  getUpcomingEventRequest,
  joinEventRequest,
  joinTeamEventRequest,
  payWithDebitRequest,
  payWithSocialAccountRequest,
  setEventRequest,
  setOngoingEventRequest,
  setUpcomingEventRequest,
} from './event-sega/event-sega';

import {getActivitiesRequest} from './activity-saga/activity-saga';
import {subscriptionsRequest} from './subscription-saga/subscription-saga';

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
  yield fork(getActivitiesRequest);
  yield fork(addcardRequest);
  yield fork(getPaymentCardRequest);
  yield fork(payWithDebitRequest);
  yield fork(payWithSocialAccountRequest);
  yield fork(joinEventRequest);
  yield fork(joinTeamEventRequest);
  yield fork(setFilterExerciseRequest);
  yield fork(getExerciseRequest);
  yield fork(setfilteredBodyExerciseRequest);
  yield fork(setfilteredCategoryExerciseRequest);
  yield fork(selectfilteredCategoryExerciseRequest);
  yield fork(selectfilteredBodyExerciseRequest);
  yield fork(setExerciseScreenRequest);
  yield fork(setExerciseItemRequest);
  yield fork(createExerciseWorkoutRequest);
  yield fork(getFilteredExerciseRequest);
  yield fork(setRecentSearchRequest);
  yield fork(setEventRequest);
  yield fork(getNotificationListRequest);
  yield fork(deleteNotificationRequest);
  yield fork(saveDeviceTokenRequest);
  yield fork(deleteRequestSaga);
  yield fork(selectModeRequestSaga);
  yield fork(userInfoRequestSaga);
  yield fork(getUserInfoRequestSaga);
  yield fork(UpdateUserInfoRequestSaga);
  yield fork(subscriptionsRequest);
}
