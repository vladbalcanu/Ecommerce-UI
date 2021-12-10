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
