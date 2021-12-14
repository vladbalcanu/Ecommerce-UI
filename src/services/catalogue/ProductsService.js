import {localStorageService} from '../../api/storage'
import {api} from '../../api/client'

export default class ProductsService {
static async getProducts() {
const {data} = await api.client.get('catalogue/product/');
console.log(data);
return data
}
static async searchProducts(search="",categoryId="") {
    console.log(search);
    const {data} = await api.client.get(`catalogue/product/?search=${search}&category=${categoryId}`);
    return data
    }
}