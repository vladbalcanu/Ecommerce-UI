import {createSelector} from '@reduxjs/toolkit'

import {initialState} from '.'

// First select the relevant part from the state
const selectDomain = (state) => state.auth || initialState

export const selectLoading = createSelector(
  [selectDomain],
  authState => authState.isLoading
)

export const selectIsAuth = createSelector(
  [selectDomain],
  authState => authState.isAuth
)

export const selectIsError = createSelector(
  [selectDomain],
  authState => authState.isError
)

export const selectError = createSelector(
  [selectDomain],
  authState => authState.error
)

export const selectCurrentUser = createSelector(
  [selectDomain],
  authState => authState.currentUser
)

