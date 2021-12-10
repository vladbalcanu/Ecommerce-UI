import {createSlice} from '@reduxjs/toolkit'

export const initialState = {
  isPending: false,
  isError: false,
  product: null
}
export const index = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setIsPending: (state, action) => {
      state.isPending = action.payload
    },
    setError: (state, action) => {
      state.isError = true

    },
    setProduct: (state, action) => {
      state.product = action.payload.product
    }
  }
})

export const {setIsPending, setError, setProduct} = index.actions


export default index.reducer
