import {createSelector} from '@reduxjs/toolkit'
import {initialState} from '.'


const selectDomain = (state) => state.checkout || initialState

export const selectClientSecret = createSelector(
  [selectDomain],
  state => state.clientSecret
)


export const selectError = createSelector(
  [selectDomain],
  state => state.isError
)

export const selectIsPending = createSelector(
  [selectDomain],
  state => state.isPending
)
