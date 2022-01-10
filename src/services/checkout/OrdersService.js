import {api} from '../../api/client'

export default class OrdersService {

  static async getUserOrders() {
    const {data} = await api.client.get('order/')
    return data
  }
}
