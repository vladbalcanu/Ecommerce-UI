import {createSlice} from '@reduxjs/toolkit'

export const initialState = {
  isPending: false,
  isError: false,
  items: [],
  cart: null
}

export const index = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setIsPending: (state, action) => {
      state.isPending = action.payload
    },
    setError: (state, action) => {
      state.isError = true
    },
    setItems: (state, action) => {
      state.items = action.payload.items
    },
    setCartData: (state, action) => {
      state.cart = action.payload.cart
    }
  }
})

export const {setIsPending, setError, setCartData, setItems} = index.actions


export default index.reducer
