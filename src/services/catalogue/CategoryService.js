import {api} from '../../api/client'


export default class CategoryService {
  static async getCategories() {
    const {data} = await api.client.get('catalogue/category/')
    return data
  }
}
