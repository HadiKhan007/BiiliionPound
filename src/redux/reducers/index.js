import {combineReducers} from 'redux';
import activityReducer from './activity-reducer/activity-reducer';

import authReducer from './auth-reducers/auth-reducer';
import eventReducer from './event-reducer/event-reducer';
import exerciseReducer from './exercise-reducer/exercise-reducer';
import profileReducer from './profile-reducers/profile-reducer';
import pedometerReducer from './pedometer-reducer/pedometer-reducer';
import * as types from '../actions/types';

const appReducer = combineReducers({
  /* your app’s top-level reducers */
  auth: authReducer,
  profile: profileReducer,
  exercise: exerciseReducer,
  event: eventReducer,
  activity: activityReducer,
  pedometer: pedometerReducer,
});

const rootReducer = (state, action) => {
  // when a logout action is dispatched it will reset redux state
  if (action.type === types.LOGOUT_REQUEST_SUCCESS) {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
