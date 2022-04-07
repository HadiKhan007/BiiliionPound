import {combineReducers} from 'redux';
import activityReducer from './activity-reducer/activity-reducer';

import authReducer from './auth-reducers/auth-reducer';
import eventReducer from './event-reducer/event-reducer';
import exerciseReducer from './exercise-reducer/exercise-reducer';
import profileReducer from './profile-reducers/profile-reducer';

let rootReducer;
export default rootReducer = combineReducers(
  Object.assign({
    auth: authReducer,
    profile: profileReducer,
    exercise: exerciseReducer,
    event: eventReducer,
    activity: activityReducer,
  }),
);
