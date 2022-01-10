import {api} from '../../api/client'


export default class ProductService {
  static async getProduct(id) {
    const {data} = await api.client.get('catalogue/product/' + id)
    return data
  }

  static async getProductReviews(productId) {
    const {data} = await api.client.get(`catalogue/product/${productId}/reviews/`)
    return data
  }

  static async createReview({product, review, rating, user}) {
    const {data} = await api.client.post(`catalogue/product/${product.id}/reviews/`, {
      review,
      rating,
      product: product.id,
      user: user.id
    })
    return data
  }
}
