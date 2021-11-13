import {apiProvider} from './config'
import {localStorageService} from './storage'

export default class Api {
  constructor(options = {}) {
    this.client = options.client
    this.access = options.access
    this.refresh = options.refresh
    this.refreshRequest = null
    this.useInterceptors()
  }

  useInterceptors() {
    this.useRequestInterceptors()
    this.useResponseInterceptors()
  }

  useRequestInterceptors() {
    this.client.interceptors.request.use(
      (config) =>
        this.onFulfilledRequestInterceptor(config),
      (e) => this.onRejectedRequestInterceptor(e)
    )
  }

  onFulfilledRequestInterceptor(config) {
    if (!this.access) {
      return config
    }

    const newConfig = {
      headers: {},
      ...config
    }

    newConfig.headers.Authorization = `Bearer ${this.access}`
    return newConfig
  }

  onRejectedRequestInterceptor(error) {
    return Promise.reject(error)
  }

  useResponseInterceptors() {
    this.client.interceptors.response.use(
      (r) => this.onFulfilledResponseInterceptor(r),
      async (error) => this.onRejectedResponseInterceptor(error)
    )
  }

  onFulfilledResponseInterceptor(response) {
    return response
  }

  async onRejectedResponseInterceptor(error) {
    if (!this.refresh || error.response?.status !== 401 || error.config.retry) {
      return Promise.reject(error)
    }

    // if occurs 401 error on refresh request
    if (this.refreshRequest) {
      this.refreshRequest = null
      return Promise.reject(error)
    }

    const data = await this.makeRefreshRequest()
    this.refreshRequest = null

    this.access = data.access
    localStorageService.setAccessToken(data.access)

    const newRequestConfig = {
      ...error.config,
      retry: true
    }
    return this.client(newRequestConfig)
  }

  async makeRefreshRequest() {
    this.refreshRequest = this.client.post('/auth/token/refresh/', {
      refresh: this.refresh
    })
    const {data} = await this.refreshRequest
    return data
  }
}

export const api = new Api({
  client: apiProvider,
  access: localStorageService.getAccessToken(),
  refresh: localStorageService.getRefreshToken()
})
