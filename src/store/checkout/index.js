import {createSlice} from '@reduxjs/toolkit'


export const initialState = {
  isPending: false,
  isError: false,
  order: null,
  orderComplete: false
}

export const index = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    setIsPending: (state, action) => {
      state.isPending = action.payload
    },
    setError: (state, action) => {
      state.isError = true
    },

    setOrder: (state, action) => {
      state.order = action.payload.order
      state.orderComplete = true
    }
  }
})

export const {setIsPending, setError, setOrder} = index.actions


export default index.reducer
