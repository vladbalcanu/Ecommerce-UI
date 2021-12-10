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

  static async signup({email, password, first_name, lat_name}) {
    const {data} = await api.client.post('auth/register/', {email, password, first_name, lat_name})
    api.access = data.tokens.access
    api.refresh = data.tokens.refresh
    localStorageService.setTokens({...data.tokens})
    return data.user
  }

  static async me() {
    const {data} = await api.client('/auth/me')
    return data
  }
}
