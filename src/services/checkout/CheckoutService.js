import {api} from '../../api/client'


export default class CheckoutService {
  static async getClientSecret() {
    const {data} = await api.client.post('checkout/secret/', {})
    return data
  }

  static async placeOrder({billingAddress, shippingAddress, cart}) {
    const {data} = await api.client.post('order/', {
      billing_address: billingAddress,
      shipping_address: shippingAddress,
      cart
    })
    return data
  }
}
