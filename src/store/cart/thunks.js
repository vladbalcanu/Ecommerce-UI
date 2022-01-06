import {setError, setIsPending} from '../catalogue'
import CartService from '../../services/cart/CartService'
import {setCartData, setItems} from './'

export const getCartForUser = () => async (dispatch) => {
  dispatch(setIsPending(true))
  try {
    const cart = await CartService.getCart()
    dispatch(setCartData({cart}))
  } catch (error) {
    dispatch(setError())
  } finally {
    dispatch(setIsPending(false))
  }
}


export const addProductToCart = ({product}) => async (dispatch, getState) => {
  dispatch(setIsPending(true))
  try {
    const cart = getState().cart?.cart
    await CartService.addProductToCart({product, cart})
    dispatch(getCartForUser())
  } catch (error) {
    dispatch(setError())
  } finally {
    dispatch(setIsPending(false))
  }
}

export const getCartItems = () => async (dispatch, getState) => {
  dispatch(setIsPending(true))
  try {
    const cart = getState().cart?.cart
    const data = await CartService.getCartItems({cart})
    dispatch(setItems({items: data.results}))
  } catch (error) {
    dispatch(setError())
  } finally {
    dispatch(setIsPending(false))
  }
}
