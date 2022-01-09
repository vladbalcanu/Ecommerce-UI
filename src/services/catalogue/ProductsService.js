import {api} from '../../api/client'

export default class ProductsService {
  static async getProducts() {
    const {data} = await api.client.get('catalogue/product/')
    return data
  }

  static async searchProducts(search = '') {
    const {data} = await api.client.get(`catalogue/product/?search=${search}`)
    return data
  }

  static async getProductsByCategory(categoryId, priceMin, priceMax) {
    const {data} = await api.client(`catalogue/category/${categoryId}/products/?price_min=${priceMin}&price_max=${priceMax}`)
    return data
  }
}
