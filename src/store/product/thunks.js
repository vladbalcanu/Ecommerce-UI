import {setError, setIsPending, setProduct} from '.'
import ProductService from '../../services/catalogue/ProductsDetailsService'
import {setReviews} from './index'


export const getProduct = (id) => async (dispatch) => {
  dispatch(setIsPending(true))
  try {
    const paginatedProduct = await ProductService.getProduct(id)
    dispatch(setProduct({product: paginatedProduct}))
    const productReviews = await ProductService.getProductReviews(id)
    dispatch(setReviews({reviews: productReviews.results}))
  } catch (error) {
    dispatch(setError())
  } finally {
    dispatch(setIsPending(false))
  }
}


export const createReview = ({review, rating}) => async (dispatch, getState) => {
  dispatch(setIsPending(true))
  try {

    const product = getState().product.product
    const user = getState().auth.currentUser
    await ProductService.createReview({product, review, rating, user})
    const productReviews = await ProductService.getProductReviews(product.id)
    dispatch(setReviews({reviews: productReviews.results}))
  } catch (error) {
    dispatch(setError())
  } finally {
    dispatch(setIsPending(false))
  }
}
