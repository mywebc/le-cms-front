import { AuthRequestType } from '../interface/auth'
import { post } from './../utils/request'

/**
 * 请求登录接口
 */
export const apiPostLogin = (params: AuthRequestType) => post(`/api/auth/login`, params)
