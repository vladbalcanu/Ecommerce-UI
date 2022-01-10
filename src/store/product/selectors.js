import {createSelector} from '@reduxjs/toolkit'
import {initialState} from '.'


const selectDomain = (state) => state.product || initialState

export const selectProduct = createSelector(
  [selectDomain],
  productState => productState.product
)
export const selectError = createSelector(
  [selectDomain],
  productState => productState.isError
)

export const selectIsPending = createSelector(
  [selectDomain],
  productState => productState.isPending
)

export const selectProductReviews = createSelector(
  [selectDomain],
  productState => productState.reviews
)
