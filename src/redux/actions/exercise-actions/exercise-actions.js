import * as TYPES from '../types';

//Get Lifted Weight Action
export const get_lifted_weight_request = (cbSuccess, cbFailure) => {
  return {
    type: TYPES.GET_LIFTED_WEIGHT_REQUEST,
    cbSuccess,
    cbFailure,
  };
};

export const createCustomExercise = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.CUSTOM_EXERCISE_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};