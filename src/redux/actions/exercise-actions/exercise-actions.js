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

//Get Filter Date
export const get_filter_exercise_request = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.GET_FILTERED_EXERCISE_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};

export const set_category_filtered_request = (params, cbSuccess) => {
  return {
    type: TYPES.SET_CATEGORY_FILTERED_REQUEST,
    params,
    cbSuccess,
  };
};

export const set_body_filtered_request = (params, cbSuccess) => {
  return {
    type: TYPES.SET_BODY_FILTERED_REQUEST,
    params,
    cbSuccess,
  };
};

export const select_category_filter_request = params => {
  return {
    type: TYPES.SELECT_CATEGORY_FILTER_REQUEST,
    params,
  };
};

export const select_body_filter_request = params => {
  return {
    type: TYPES.SELECT_BODY_FILTER_REQUEST,
    params,
  };
};

//Get Filter Date
export const get_exercise_request = (cbSuccess, cbFailure) => {
  return {
    type: TYPES.GET_EXERCISE_REQUEST,
    cbSuccess,
    cbFailure,
  };
};
