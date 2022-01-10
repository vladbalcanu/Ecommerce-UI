import {setError, setIsPending, setOrders} from '.'
import OrdersService from '../../services/checkout/OrdersService'


export const getUserOrders = () => async (dispatch) => {
  dispatch(setIsPending(true))
  try {
    const data = await OrdersService.getUserOrders()
    console.log(data)
    await dispatch(setOrders({orders: data.results}))
  } catch (error) {
    dispatch(setError())
  } finally {
    dispatch(setIsPending(false))
  }
}

