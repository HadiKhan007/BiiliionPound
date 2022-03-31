import {ENDPOINTS, HTTP_CLIENT} from '../exporter';

//Exercise Upcoming Requests
export const getUpcomingEvent = () => {
  return HTTP_CLIENT.get(`${ENDPOINTS.EVENTS}/upcoming_events`);
};

//Exercise Ongoing Requests
export const getOngoingEvent = () => {
  return HTTP_CLIENT.get(`${ENDPOINTS.EVENTS}/ongoing_events`);
};
//GET ALL PAYMENT CARDS
export const getPaymentCards = () => {
  return HTTP_CLIENT.get(`${ENDPOINTS.CHECKOUT}`);
};

//Add Card Requests
export const addDebitCard = params => {
  return HTTP_CLIENT.post(`${ENDPOINTS.CHECKOUT}`, params);
};

//Pay With Debit Card Requests
export const payWithDebitCard = params => {
  return HTTP_CLIENT.post(`${ENDPOINTS.CHECKOUT}/card_payment_only`, params);
};

//Pay With Social Card Requests
export const payWithSocialCard = params => {
  return HTTP_CLIENT.post(`${ENDPOINTS.CHECKOUT}/card_payment_only`, params);
};
