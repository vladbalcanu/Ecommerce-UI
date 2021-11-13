import {configureStore} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import authReducer from './auth'

export function configureAppStore() {
  const middlewares = [thunk]

  return configureStore({
    reducer: {
      auth: authReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
    devTools: process.env.NODE_ENV !== 'production'
  })
}
