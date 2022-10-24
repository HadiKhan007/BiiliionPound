import {HTTP_CLIENT, ENDPOINTS} from '../exporter';

export const stepsCounts = async (params, token) => {
  //   let selctedMode = userMode === 'weight-mode' ? 'exercise' : 'pedometer';
  return HTTP_CLIENT.post(`${ENDPOINTS.PEDOMETER}`, params, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  });
};
