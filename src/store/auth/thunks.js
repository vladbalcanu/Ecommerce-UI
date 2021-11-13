import AuthService from '../../services/AuthService'
import {logoutSuccess, setCurrentUser, setError, setIsLoading} from './index'

export const login = ({email, password}) => async (dispatch) => {
  dispatch(setIsLoading(true))
  try {
    await AuthService.login({email, password})
    await dispatch(getCurrentUser())
  } catch (error) {
    dispatch(setError())
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
    dispatch(setError())
  } finally {
    dispatch(setIsLoading(false))
  }
}
export const logout = () => async (dispatch) => {
  try {
    await AuthService.logout()
    dispatch(logoutSuccess())
  } catch (e) {
    dispatch(setError())
  }
}
