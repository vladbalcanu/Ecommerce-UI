import {setError, setIsPending, setProducts} from '.'
import ProductsService from '../../services/catalogue/ProductsService'


export const getProducts = () => async (dispatch) => {
  dispatch(setIsPending(true))
  try {
    const paginatedProducts = await ProductsService.getProducts()
    dispatch(setProducts({products: paginatedProducts.results}))
  } catch (error) {
    dispatch(setError())
  } finally {
    dispatch(setIsPending(false))
  }
}

export const searchProducts = (search) => async (dispatch) => {
  dispatch(setIsPending(true))
  try {
    const paginatedProducts = await ProductsService.searchProducts(search)
    dispatch(setProducts({products: paginatedProducts.results}))
  } catch (error) {
    dispatch(setError())
  } finally {
    dispatch(setIsPending(false))
  }
}


export const getProductsByCategory = (categoryId) => async (dispatch) => {
  dispatch(setIsPending(true))
  try {
    const paginatedProducts = await ProductsService.getProductsByCategory(categoryId)
    dispatch(setProducts({products: paginatedProducts.results}))
  } catch (error) {
    dispatch(setError())
  } finally {
    dispatch(setIsPending(false))
  }
}
