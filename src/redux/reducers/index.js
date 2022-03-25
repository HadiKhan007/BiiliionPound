import {combineReducers} from 'redux';

import authReducer from './auth-reducers/auth-reducer';
import profileReducer from './profile-reducers/profile-reducer';

let rootReducer;
export default rootReducer = combineReducers(
  Object.assign({
    auth: authReducer,
    profile: profileReducer,
  }),
);
