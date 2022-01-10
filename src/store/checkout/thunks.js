import {setError, setIsPending, setOrder} from '.'
import CheckoutService from '../../services/checkout/CheckoutService'
import StripeService from '../../services/checkout/StripeService'
import {getCartForUser} from '../cart/thunks'


export const confirmCardPayment = ({stripe, paymentMethod, shippingAddress, billingAddress, cart}) => async (dispatch) => {
  dispatch(setIsPending(true))
  try {
    const {client_secret: clientSecret} = await CheckoutService.getClientSecret()
    const data = await StripeService.confirmCardPayment(stripe, clientSecret, paymentMethod)
    if (data.error) {
      console.log(data.error)
      dispatch(setError())
    }
    const order = await CheckoutService.placeOrder({billingAddress, shippingAddress, cart})
    dispatch(setOrder({order}))
    dispatch(getCartForUser())
  } catch (error) {
    dispatch(setError())
  } finally {
    dispatch(setIsPending(false))
  }
}

