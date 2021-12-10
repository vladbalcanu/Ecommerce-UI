import {createSlice} from '@reduxjs/toolkit'

export const initialState = {
  isPending: false,
  isError: false,
  categories: []
}
export const index = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setIsPending: (state, action) => {
      state.isPending = action.payload
    },
    setError: (state, action) => {
      state.isError = true
    },
    setCategories: (state, action) => {
      state.categories = action.payload.categories

    }
  }

})

export const {setIsPending, setError, setCategories} = index.actions


export default index.reducer
