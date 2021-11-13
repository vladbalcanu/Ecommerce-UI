import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL
const API_PREFIX = process.env.REACT_APP_API_PREFIX
const BASE_URL = `${API_URL}${API_PREFIX}`

export const ACCESS_TOKEN_NAME = 'access'
export const REFRESH_TOKEN_NAME = 'refresh'

export const apiProvider = axios.create({
  baseURL: BASE_URL
})
