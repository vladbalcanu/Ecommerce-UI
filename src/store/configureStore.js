import {configureStore} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import authReducer from './auth'
import catalogueReducer from './catalogue'
import productReducer from './product'
import categoryReducer from './categories'

export function configureAppStore() {
  const middlewares = [thunk]

  return configureStore({
    reducer: {
      auth: authReducer,
      catalogue: catalogueReducer,
      product: productReducer,
      categories: categoryReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
    devTools: process.env.NODE_ENV !== 'production'
  })
}
