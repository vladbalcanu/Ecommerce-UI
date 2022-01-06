import {api} from '../../api/client'


export default class CartService {
  static async getCartItems({cart}) {
    const {data} = await api.client.get(`cart/${cart.id}/items/`)
    return data
  }

  static async addProductToCart({product, cart}) {
    const {data} = await api.client.post('cart/items/', {cart: cart.id, product: product.id})
    return data
  }

  static async getCart() {
    const {data} = await api.client.get('cart/')
    return data
  }
}
