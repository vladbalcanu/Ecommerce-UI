import { api } from "../../api/client";


export default class CartService{
static async getCartItems(){
    const {data}=await api.client.get('cart/items//')
    return data
}
static async add(){
    const {data}=await api.client.get('cart/items//')
    return data
}
}