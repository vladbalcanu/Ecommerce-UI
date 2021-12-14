import {localStorageService} from '../../api/storage'
import {api} from '../../api/client'
import { useParams } from "react-router";


export default class ProductService {
static async getProduct(id){
const {data} = await api.client.get('catalogue/product/'+id);
return data
}}
