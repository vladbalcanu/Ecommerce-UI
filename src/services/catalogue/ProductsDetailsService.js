import {api} from '../../api/client'


export default class ProductService {
  static async getProduct(id) {
    const {data} = await api.client.get('catalogue/product/' + id)
    return data
  }
}
