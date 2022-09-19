import {ENDPOINTS, HTTP_CLIENT} from '../exporter';

//Exercise Upcoming Requests
export const getSubscriptions = () => {
  return HTTP_CLIENT.get(`${ENDPOINTS.GET_SUBSCRIPTIONS}`);
};
