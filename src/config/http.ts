import axios, { AxiosError, AxiosResponse } from 'axios'
import qs from 'qs'

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  paramsSerializer: function (params) {
    return qs.stringify(params, { indices: false })
  },
})

function parseBody(response: AxiosResponse) {
  if (response.status === 200 || response.status === 201) {
    return response
  } else {
    return response.data?.messages
  }
}

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return parseBody(response)
  },
  (error: AxiosError) => {
    console.warn('Error status', error?.response?.status)
  },
)

export const http = instance
