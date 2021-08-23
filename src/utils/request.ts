import { message as $message } from 'antd'
import axios from 'axios'

axios.defaults.timeout = 10000
// axios.defaults.baseURL = BASE_URLS[process.env.REACT_APP_ENV!]
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

// axios.defaults.baseURL = '/api'

axios.interceptors.request.use(
  config => {
    // const user = userManager.getUser();
    // config.headers.token = (user && user.token) || '';
    return config
  },
  error => {
    Promise.reject(error)
  }
)

axios.interceptors.response.use(
  // @ts-ignore
  res => {
    console.log('res', res)
    if (res?.data?.code === 0) {
      return Promise.resolve(res.data)
    }
    // 没权限
    if (res.data.code === 401) {
      window.location.href = '/auth'
    }
    return Promise.reject(res)
  },
  error => {
    console.log('error', error)
    $message.error(error.data.msg)
    return {
      status: false,
      msg: error.data.msg,
      data: error.data.data,
      code: error.data?.code
    }
  }
)

export type Response<T = any, U = any> = {
  status: boolean
  msg: string
  code: number
  data: T
  errors: U
}

export type ResponseType<T = any> = Promise<Response<T>>

export const get = <T = any>(url: string, params?: any): ResponseType<T> => {
  return axios.get(url, {
    params
  })
}

export const post = <T = any>(url: string, data?: any): ResponseType<T> => {
  return axios.post(url, data)
}

export const put = <T = any>(url: string, data?: any): ResponseType<T> => {
  return axios.put(url, data)
}

export const del = <T = any>(url: string, data?: any): ResponseType<T> => {
  return axios.delete(url, data)
}
