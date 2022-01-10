import {createSelector} from '@reduxjs/toolkit'
import {initialState} from '.'


const selectDomain = (state) => state.profile || initialState

export const selectOrders = createSelector(
  [selectDomain],
  state => state.orders
)

