import AuthService from '../../services/AuthService'
import {logoutSuccess, setCurrentUser, setError, setIsLoading} from './index'


export const login = ({email, password}) => async (dispatch) => {
  dispatch(setIsLoading(true))
  try {
    await AuthService.login({email, password})
    dispatch(getCurrentUser())
  } catch (error) {
    dispatch(setError({error: error?.response?.data}))
  } finally {
    dispatch(setIsLoading(false))
  }
}


export const getCurrentUser = () => async (dispatch) => {
  dispatch(setIsLoading(true))
  try {
    const currentUser = await AuthService.me()
    dispatch(setCurrentUser({currentUser}))
  } catch (error) {
    dispatch(setError({error: error?.response?.data}))
  } finally {
    dispatch(setIsLoading(false))
  }
}


export const logout = () => async (dispatch) => {
  dispatch(setIsLoading(true))
  try {
    await AuthService.logout()
    dispatch(logoutSuccess())
  } catch (error) {
    dispatch(setError({error: error?.response?.data}))
  } finally {
    dispatch(setIsLoading(false))
  }
}

export const signup = ({email, password, first_name, lat_name}) => async (dispatch) => {
  dispatch(setIsLoading(true))
  try {
    const currentUser = await AuthService.signup({email, password, first_name, lat_name})
    dispatch(setCurrentUser({currentUser}))
  } catch (error) {
    dispatch(setError({error: error?.response?.data}))
  } finally {
    dispatch(setIsLoading(false))
  }
}
