import {ACCESS_TOKEN_NAME, REFRESH_TOKEN_NAME} from './config'

export default class LocalStorageService {
    setTokens({access, refresh}) {
        this.setAccessToken(access)
        this.setRefreshToken(refresh)
    }

    setAccessToken(access) {
        localStorage.setItem(ACCESS_TOKEN_NAME, access)
    }

    setRefreshToken(refresh) {
        localStorage.setItem(REFRESH_TOKEN_NAME, refresh)
    }

    getAccessToken() {
        return localStorage.getItem(ACCESS_TOKEN_NAME)
    }

    getRefreshToken() {
        return localStorage.getItem(REFRESH_TOKEN_NAME)
    }

    removeTokens() {
        localStorage.removeItem(ACCESS_TOKEN_NAME)
        localStorage.removeItem(REFRESH_TOKEN_NAME)
    }
}

export const localStorageService = new LocalStorageService()
