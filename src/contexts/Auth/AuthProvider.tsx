import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import api from '../../services/api'
import { SignInProps } from '../../types/Auth'
import { User } from '../../types/User'
import { AuthContext } from './AuthContext'
import { setLocalStorageToken } from './setLocalStorageToken'

type AuthProviderProps = {
  children: JSX.Element
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate()
  const location = useLocation()

  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const handlerGithubAuth = async (code: string) => {
      try {
        const data = await api.githubAuth(code)
        setUser(data.user)
        setLocalStorageToken(data.accessToken)
        navigate('/admin')
      } catch (error) {
        if (error instanceof Error)
          setError(error.message)
      }
    }

    const code = location.search.split('?code=')[1]

    if (!!code) {
      handlerGithubAuth(code)
    }
  }, []);

  useEffect(() => {
    const validateToken = async () => {
      const token = localStorage.getItem('IKATOO_AuthToken')
      if (!!token) {
        try {
          const data = await api.siginWithToken(token)
          if (!!data.user) {
            setUser(data.user)
            location.pathname === '/login'
              ? navigate('/admin')
              : navigate(location.pathname)
          }
        } catch (error) {
          console.error(error)
          signOut()
        }
      }
    }
    validateToken()
  }, [localStorage]);

  const signIn = async ({ username, email, password }: SignInProps) => {
    const data = await api.signIn({ username, email, password })
    if (data.user && data.accessToken && data.refreshToken) {
      setUser(data.user)
      setLocalStorageToken(data.accessToken)
      navigate('/admin')
      return true
    }
    return false
  }

  const signOut = async () => {
    await api.signOut()
    setUser(null)
    setLocalStorageToken('')
    navigate('/login')
  }

  return (
    <AuthContext.Provider value={{ user, error, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}