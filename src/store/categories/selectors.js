import {createSelector} from '@reduxjs/toolkit'
import {initialState} from '.'


const selectDomain = (state) => state.categories || initialState

export const selectCategories = createSelector(
  [selectDomain],
  categoriesState => categoriesState.categories
)
export const selectError = createSelector(
  [selectDomain],
  categoriesState => categoriesState.isError
)

export const selectIsPending = createSelector(
  [selectDomain],
  categoriesState => categoriesState.isPending
)
