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


export const addProductToCart = ({product,quantity}) => async (dispatch, getState) => {
  dispatch(setIsPending(true))
  try {
    const cart = getState().cart?.cart
    await CartService.addProductToCart({product, cart,quantity})
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

export const deleteItemFromCart = ({cartItem}) => async (dispatch,getState) => {
  dispatch(setIsPending(true))
  try {
    await CartService.deleteCartItem({cartItem})
    const cart = getState().cart?.cart
    const data = await CartService.getCartItems({cart})
    dispatch(getCartForUser())
    dispatch(setItems({items: data.results}))
  } catch (error) {
    dispatch(setError())
  } finally {
    dispatch(setIsPending(false))
  }
  
}
export const updateItemFromCart = ({newCartItem}) => async (dispatch,getState) => {
  dispatch(setIsPending(true))
  try {
    console.log("THUNK")
    console.log(newCartItem)
    const cart = getState().cart?.cart
    await CartService.updateCartItem({newCartItem,cart})
   
  } catch (error) {
    dispatch(setError())
  } finally {
    dispatch(setIsPending(false))
    const cart = getState().cart?.cart
    const data = await CartService.getCartItems({cart})
    dispatch(getCartForUser())  
    dispatch(setItems({items: data.results}))
    console.log("AICI ");
  }
}
