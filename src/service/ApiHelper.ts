import axios, { AxiosInstance, AxiosResponse } from 'axios'
// import {BASE_URL} from "../env";

let BASE_URL = ''

const ApiHelper = (
  endPoint: string,
  reqType: CALL_METHOD,
  params?: any,
  token?: string,
) => {
  let occ: AxiosInstance
  if (token !== null) {
    const header = {
      Authorization: `Bearer ${token}`,
    }
    occ = axios.create({ baseURL: BASE_URL, headers: header })
  } else {
    occ = axios.create({
      baseURL: BASE_URL,
    })
  }
  switch (reqType) {
    case 'get':
      return new Promise((resolve, reject) => {
        occ
          .get(endPoint)
          .then((response: AxiosResponse) => {
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })

    case 'post':
      return new Promise<AxiosResponse>((resolve, reject) => {
        const credentials = qs.stringify(params)
        occ
          .post(endPoint, credentials)
          .then((response: AxiosResponse) => {
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })
    case 'put':
      return new Promise((resolve, reject) => {
        occ
          .put(endPoint, params)
          .then((response) => {
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })

    default:
      break
  }
}

export type CALL_METHOD = 'post' | 'get' | 'put'

export default ApiHelper
