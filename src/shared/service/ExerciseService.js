import {ENDPOINTS, HTTP_CLIENT} from '../exporter';

//Exercise Requests
export const getWeightLifted = () => {
  return HTTP_CLIENT.get(`${ENDPOINTS.EXERCISES}/weight_lifted`);
};

export const creatingCustomExercise = params => {
  return HTTP_CLIENT.post(ENDPOINTS.EXERCISES, params);
};
//Get Filtered Exercise
export const getAllFilterExer = () => {
  return HTTP_CLIENT.get(`${ENDPOINTS.EXERCISES}filter_exercise`);
};

export const getAllExer = params => {
  // console.log('data', params);
  return HTTP_CLIENT.post(
    `${ENDPOINTS.EXERCISES}/filter_exercise.json`,
    params,
  );
};

//Create Exercise Workout
export const createExerWorkout = params => {
  // console.log(params);
  return HTTP_CLIENT.post(`${ENDPOINTS.USER_EXERCISES}`, params);
};

//Notifications
export const savefcmToken = params => {
  // console.log(params);
  return HTTP_CLIENT.post(`${ENDPOINTS.USER_EXERCISES}`, params);
};

//Notifications
export const getNotifications = params => {
  // console.log(params);
  return HTTP_CLIENT.post(`${ENDPOINTS.USER_EXERCISES}`, params);
};

//Notifications
export const delNotification = params => {
  // console.log(params);
  return HTTP_CLIENT.post(`${ENDPOINTS.USER_EXERCISES}`, params);
};
