import {createSlice} from '@reduxjs/toolkit'


export const initialState = {
  isPending: false,
  isError: false,
  orders: []
}

export const index = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setIsPending: (state, action) => {
      state.isPending = action.payload
    },
    setError: (state, action) => {
      state.isError = true
    },

    setOrders: (state, action) => {
      state.orders = action.payload.orders
    }
  }
})

export const {setIsPending, setError, setOrders} = index.actions


export default index.reducer
