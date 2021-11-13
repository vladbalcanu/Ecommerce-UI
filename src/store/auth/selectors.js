import {createSelector} from '@reduxjs/toolkit'

import {initialState} from '.'

// First select the relevant part from the state
const selectDomain = (state) => state.auth || initialState

export const selectUsername = createSelector(
  [selectDomain],
  authState => authState.username
)

export const selectLoading = createSelector(
  [selectDomain],
  authState => authState.isLoading
)

export const selectError = createSelector(
  [selectDomain],
  authState => authState.isError
)

export const selectCurrentUser = createSelector(
  [selectDomain],
  authState => authState.currentUser
)
