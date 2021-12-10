import {localStorageService} from '../../api/storage'
import {api} from '../../api/client'

export default class ProductsService {
static async getProducts() {
const {data} = await api.client.get('catalogue/product/');
return data
}
 
}
