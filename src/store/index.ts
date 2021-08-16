import { Action, configureStore } from '@reduxjs/toolkit'
import { ThunkAction } from 'redux-thunk'
import rootReducer from './rootReducer'

const store = configureStore({
  reducer: rootReducer
})

export type AppState = ReturnType<typeof rootReducer>

export type AppDispatch = typeof store.dispatch

export type AppThunk = ThunkAction<void, AppState, null, Action<string>>

export default store
