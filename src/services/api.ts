import axios from 'axios'
import { AuthResponseType, SignInProps } from '../types/Auth'

const API_URL = import.meta.env.VITE_API_URL

const api = axios.create({
  baseURL: API_URL
})

const githubAuth = async (code: string) => {
  const response = await api.post<AuthResponseType>('/auth/github', {
    code
  })
  return response.data
}

const siginWithToken = async (token: string) => {
  const response = await api.post<AuthResponseType>(
    '/auth/refresh-token',
    `bearer ${token}`
  )
  return response.data
}

const signin = async ({ username, email, password }: SignInProps) => {
  return <AuthResponseType>{
    user: {
      id: '123456',
      name: 'José',
      username: 'jose',
      email: 'jose@teste.com'
    },
    accessToken: '123456789',
    refreshToken: '123456789'
  }
  const response = await api.post<AuthResponseType>('/auth', {
    email,
    username,
    password
  })
  return response.data
}

const signout = async () => {
  return
  const response = await api.post('/auth/signout')
  return response.data
}

export default {
  githubAuth,
  siginWithToken,
  signin,
  signout
}
