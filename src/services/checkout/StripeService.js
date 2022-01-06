import {loadStripe} from '@stripe/stripe-js'

export const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)

export default class StripeService {
  static confirmCardPayment(stripe, clientSecret, paymentMethod) {
    return stripe.confirmCardPayment(clientSecret, {
      payment_method: paymentMethod
    })
  }
}
