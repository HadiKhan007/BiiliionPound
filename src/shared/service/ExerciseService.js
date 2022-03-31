import {ENDPOINTS, HTTP_CLIENT} from '../exporter';

//Exercise Requests
export const getWeightLifted = () => {
  return HTTP_CLIENT.get(`${ENDPOINTS.EXERCISES}/weight_lifted`);
};

export const creatingCustomExercise = params => {
  return HTTP_CLIENT.post(ENDPOINTS.EXERCISES, params);
};