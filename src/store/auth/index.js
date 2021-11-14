import {createSlice} from '@reduxjs/toolkit'

export const initialState = {
  isAuth: false,
  isError: false,
  isLoading: false,
  currentUser: null,
  error: null
}

export const index = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload
    },

    setError: (state, action) => {
      state.isError = true
      state.isAuth = false
      state.error = action.payload.error
    },

    setCurrentUser: (state, action) => {
      state.currentUser = action.payload.currentUser
      state.isAuth = true
      state.isError = false
      state.error = null
    },

    logoutSuccess: (state) => {
      state.isAuth = false
      state.currentUser = null
    }
  }
})

// Action creators are generated for each case reducer function
export const {setIsLoading, setError, setCurrentUser, logoutSuccess} = index.actions

export default index.reducer
