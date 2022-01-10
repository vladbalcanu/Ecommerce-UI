import { createSlice } from "@reduxjs/toolkit"

export const initialState={
    isPending:false,
    isError:false,
    product:[],
    reviews: []
}
export const index=createSlice({
    name:"product",
    initialState,
    reducers:{
        setIsPending: (state,action)=>{
          state.isPending=action.payload
        },
        setError:(state,action)=>{
          state.isError=true

        },
        setProduct:(state,action)=>{
          state.product=action.payload.product
        },
        setReviews: (state, action) => {
            state.reviews = action.payload.reviews
        }
    }
})

export const {setIsPending,setError,setProduct, setReviews} = index.actions


export default index.reducer
