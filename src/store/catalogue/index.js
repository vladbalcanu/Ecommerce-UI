import {createSlice} from '@reduxjs/toolkit'

export const initialState = {
    isPending:false,
    isError:false,
    products:[]
}

export const index = createSlice({
  name: 'catalogue',
  initialState,
  reducers: {
      setIsPending: (state,action)=>{
          state.isPending=action.payload
      },
      setError:(state,action)=>{
        state.isError=true
      },
      setProducts:(state,action)=>{
        state.products=action.payload.products
      }
  }
})

// Action creators are generated for each case reducer function
export const {setIsPending,setError,setProducts} = index.actions


export default index.reducer
