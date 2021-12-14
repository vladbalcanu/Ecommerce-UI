import {setIsPending,setCategories,setError } from "."
import CategoryService from "../../services/catalogue/CategoryService"


export const getCategories=() => async (dispatch) =>{
    dispatch(setIsPending(true))
    try{
        const paginatedCategories=await CategoryService.getCategories()
        console.log(paginatedCategories);
        dispatch(setCategories({categories:paginatedCategories.results}))
    }catch(error){
        dispatch(setError())
    }finally{
        dispatch(setIsPending(false))
    }
}
