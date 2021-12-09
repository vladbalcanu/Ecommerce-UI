import { setIsPending, setProducts,setError } from "."
import ProductsService from "../../services/catalogue/ProductsService"


export const getProducts=() => async (dispatch) =>{
    dispatch(setIsPending(true))
    try{
        const paginatedProducts=await ProductsService.getProducts()
        dispatch(setProducts({products:paginatedProducts.results}))
    }catch(error){
        dispatch(setError())
    }finally{
        dispatch(setIsPending(false))
    }
}

export const searchProducts=(search,categoryId) => async (dispatch) =>{
    dispatch(setIsPending(true))
    try{
        console.log("thunk");
        const paginatedProducts=await ProductsService.searchProducts(search,categoryId)
        dispatch(setProducts({products:paginatedProducts.results}))
    }catch(error){
        dispatch(setError())
    }finally{
        dispatch(setIsPending(false))
    }
}
