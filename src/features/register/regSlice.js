import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import {authAPI} from '../../api/regAPI.js'
export const regSlice = createSlice({
    name: 'reg',
    initialState: {
      isReg: false,
      error: false
    },
    reducers: {
  
      setIsReg: (state) => {
          state.isReg = true
          state.error = false
      },
  
      setRegError: (state) => {
          console.log('Login error')
          state.error = true
          state.isReg = false
      }
    },
  })

  const { setIsReg, setRegError } = regSlice.actions

  export const register = ({email, password}) => async (dispatch, getState) => {
    try{
        dispatch(setIsReg()) 
    }catch(error){
        dispatch(setRegError())
    }
}

export default regSlice.reducer