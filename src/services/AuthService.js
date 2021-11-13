import {localStorageService} from '../api/storage'
import {api} from '../api/client'

export default class AuthService {
  static async login({email, password}) {
    const {data} = await api.client.post('auth/token/', {email, password})
    api.access = data.access
    api.refresh = data.refresh
    localStorageService.setTokens({...data})
    return data
  }

  static async logout() {
    await api.client.post('auth/logout/', {refresh: api.refresh})
    this.access = ''
    this.refresh = ''
    localStorageService.removeTokens()
  }

  static async me() {
    return api.client('/auth/me').then(({data}) => data)
  }
}
