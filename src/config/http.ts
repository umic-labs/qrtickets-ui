import axios, { AxiosError, AxiosResponse } from 'axios'
import qs from 'qs'

let instance = axios.create({
  baseURL: `https://www.googleapis.com/books/`,
  paramsSerializer: function (params) {
    return qs.stringify(params, { indices: false })
  },
})

function parseBody(response: AxiosResponse<any>) {
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
