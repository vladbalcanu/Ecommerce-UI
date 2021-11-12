import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice.js'
import authReducer from '../features/auth/authSlice.js'
import registerReducer from '../features/register/regSlice.js'
import thunk from 'redux-thunk'


export default configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    reg: registerReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
})