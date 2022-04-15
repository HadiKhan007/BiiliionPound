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

export const set_exercise_screen_request = (params, cbSuccess) => {
  return {
    type: TYPES.SET_EXERCISE_SCREEN_REQUEST,
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

export const set_filtered_exercise_request = params => {
  return {
    type: TYPES.SET_FILTERED_EXERCISE_REQUEST,
    params,
  };
};
export const set_exercise_recent_search_request = (params, cbSuccess) => {
  return {
    type: TYPES.SET_RECENT_SEARCHES_REQUEST,
    params,
    cbSuccess,
  };
};

export const get_filtered_exercise_request = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.GET_FILTERED_EXERCISE_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};

//Get Filter Date
export const get_exercise_request = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.GET_EXERCISE_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};

//Get Filter Date
export const set_exercise_item_request = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.SET_EXERCISE_ITEM_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};

//Create Exercise Workout
export const create_exercise_workout_request = (
  params,
  cbSuccess,
  cbFailure,
) => {
  return {
    type: TYPES.CREATE_EXERCISE_WORKOUT_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};

//Create Exercise Workout
export const get_notification_list_request = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.GET_NOTIFICATION_LIST_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};

//Create Exercise Workout
export const delete_notification_request = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.DELETE_NOTIFICATION_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};

//Save Device Token
export const save_device_token = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.SAVE_DEVICE_TOKEN_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};
