import {ENDPOINTS, HTTP_CLIENT} from '../exporter';

//Exercise Requests
export const getWeightLifted = () => {
  return HTTP_CLIENT.get(`${ENDPOINTS.EXERCISES}/weight_lifted`);
};
