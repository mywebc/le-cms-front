import { AuthRequestType } from '../interface/auth'
import { post, get } from './../utils/request'

/**
 * 请求登录接口
 */
export const apiPostLogin = (params: AuthRequestType) => post(`/api/auth/login`, params)

/**
 * 注册接口
 */
export const apiPostRegister = (params: AuthRequestType) => post(`/api/auth/register`, params)

/**
 * 用户信息接口
 */
export const apiUserInfo = () => get(`/api/userInfo`)
