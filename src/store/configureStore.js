import {configureStore} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import {reducers} from './reducers'

export function configureAppStore() {
  const middlewares = [thunk]

  return configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
    devTools: process.env.NODE_ENV !== 'production'
  })
}
