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

    // if (String(res?.data?.code) === '9986' || String(res?.data?.code) === '9987') {
    //   localStorage.clear();
    //   return (window.location.href = new URL('/login', CRM_DOMAIN).href);
    // }

    // const errorMessage = res.data.message
    // $message.error(errorMessage)
    return Promise.reject(res)
  },
  error => {
    console.log('error', error)
    let errorMessage = '系统异常'
    if (error.response?.status) {
      // 业务
      console.log(error.response.status)
      switch (error.response.status) {
        case 401: {
          errorMessage = '未授权'
          break
        }
        case 404: {
          errorMessage = '资源不存在'
          break
        }
        case 500: {
          errorMessage = '服务端异常'
          break
        }
        default:
          break
      }
    }

    error.message && $message.error(errorMessage)
    return {
      status: false,
      msg: errorMessage,
      data: null,
      code: '-1'
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
