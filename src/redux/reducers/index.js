import {combineReducers} from 'redux';

import authReducer from './auth-reducers/auth-reducer';

let rootReducer;
export default rootReducer = combineReducers(
  Object.assign({
    auth: authReducer,
  }),
);
