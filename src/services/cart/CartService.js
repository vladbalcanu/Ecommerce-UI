import { cardActionAreaClasses } from '@mui/material'
import {api} from '../../api/client'
export default class CartService {
  static async getCartItems({cart}) {
    const {data} = await api.client.get(`cart/${cart.id}/items/`)
    return data
  }
  static async addProductToCart({product, cart,quantity}) {
    const {data} = await api.client.post('cart/items/', {cart: cart.id, product: product.id, quantity:quantity})
    return data
  }
  static async getCart() {
    const {data} = await api.client.get('cart/')
    return data
  }
  static async deleteCartItem({cartItem}) {
    console.log(cartItem)
    await api.client.delete(`cart/items/${cartItem.id}/`)
  }
  static async updateCartItem({newCartItem,cart}) {
    await api.client.put(`cart/items/${newCartItem.id}/`,{cart: cart.id, product: newCartItem.product.id, quantity:newCartItem.quantity})
  }
}
