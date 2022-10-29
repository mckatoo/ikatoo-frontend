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
    '/auth/access-token',
    {},
    {
      headers: {
        Authorization: `bearer ${token}`
      }
    }
  )
  return response.data
}

const signIn = async ({ username, email, password }: SignInProps) => {
  const response = await api.post<AuthResponseType>('/auth', {
    email,
    username,
    password
  })
  return response.data
}

const signOut = async () => {
  // await api.post('/auth/signout')
  return
}

export default {
  githubAuth,
  siginWithToken,
  signIn,
  signOut
}
