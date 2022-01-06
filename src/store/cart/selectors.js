import {initialState} from '.'
import {createSelector} from '@reduxjs/toolkit'

const selectDomain = (state) => state.cart || initialState

export const selectCartCount = createSelector(
  [selectDomain],
  cartState => cartState.cart?.items_count
)


export const selectCart = createSelector(
  [selectDomain],
  cartState => cartState.cart
)

export const selectCartItems = createSelector(
  [selectDomain],
  cartState => cartState.items
)
