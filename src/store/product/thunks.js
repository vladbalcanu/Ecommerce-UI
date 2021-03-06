import {setIsPending,setProduct,setError } from "."
import ProductService from "../../services/catalogue/ProductsDetailsService"


export const getProduct=(id) => async (dispatch) =>{
    dispatch(setIsPending(true))
    try{
        const paginatedProduct=await ProductService.getProduct(id)
        dispatch(setProduct({product:paginatedProduct}))
    }catch(error){
        dispatch(setError())
    }finally{
        dispatch(setIsPending(false))
    }
}
