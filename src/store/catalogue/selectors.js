import { createSelector } from "@reduxjs/toolkit";
import { initialState } from ".";


const selectDomain= (state)=> state.catalogue || initialState

export const selectProducts = createSelector(
    [selectDomain],
    catalogueState=>catalogueState.products
)
export const selectError = createSelector(

    [selectDomain],
    catalogueState=>catalogueState.isError
)

export const selectIsPending=createSelector(
    [selectDomain],
    catalogueState=>catalogueState.isPending
)