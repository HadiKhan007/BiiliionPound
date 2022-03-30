import {ENDPOINTS, HTTP_CLIENT} from '../exporter';

//Exercise Upcoming Requests
export const getUpcomingEvent = () => {
  return HTTP_CLIENT.get(`${ENDPOINTS.EVENTS}/upcoming_events`);
};

//Exercise Ongoing Requests
export const getOngoingEvent = () => {
  return HTTP_CLIENT.get(`${ENDPOINTS.EVENTS}/ongoing_events`);
};

//Add Card Requests
export const addDebitCard = params => {
  return HTTP_CLIENT.post(`${ENDPOINTS.CHECKOUT}`, params);
};
