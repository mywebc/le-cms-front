import { combineReducers } from '@reduxjs/toolkit'
import user from './userSlice'

const commonStore = {
  user
}

const rootReducer = combineReducers(commonStore)

export default rootReducer
