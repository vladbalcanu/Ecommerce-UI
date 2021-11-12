import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import {authAPI} from '../../api/authAPI.js'
export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuth: false,
    error: false,
    loading: false
  },
  reducers: {

    startLogin: (state) => {
        state.loading = true
    },

    setIsAuth: (state) => {
        state.isAuth = true
        state.loading = false
        state.error = false
    },

    setLoginError: (state) => {
        console.log('Login error')
        state.error = true
        state.isAuth = false
        state.loading = false
    }
  },
})

// Action creators are generated for each case reducer function
const { startLogin, setIsAuth, setLoginError  } = authSlice.actions


export const login = ({email, password}) => async (dispatch, getState) => {
    dispatch(startLogin())
    // axios.post('/user/login', {email, password})
    // .then(function (response) {
    //     console.log(response.status);
    //     if(response.status === 200){
    //         localStorage.setItem('ACCESS_TOKEN_NAME', response.data.access);
    //         localStorage.setItem('REFREH_TOKEN_NAME', response.data.refresh);
    //         dispatch(setIsAuth()) 

    //     }
    // })
    // .catch(function (error) {
    //     console.log(error);
    //     localStorage.setItem('ERROR', 'Login error');
    //     dispatch(setLoginError())   
    // })
    try{
        const loginResponseData = await authAPI.login({email, password})
        localStorage.setItem('ACCESS_TOKEN_NAME', loginResponseData.access);
        localStorage.setItem('REFREH_TOKEN_NAME', loginResponseData.refresh);
        dispatch(setIsAuth()) 
    }catch(error){
        dispatch(setLoginError())
    }

}

export default authSlice.reducer