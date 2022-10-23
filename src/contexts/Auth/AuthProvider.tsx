import { useState } from "react";
import { Navigate } from "react-router-dom";
import api from "../../services/api";
import { SignInProps } from "../../types/Auth";
import { User } from "../../types/User";
import { AuthContext } from "./AuthContext";

type AuthProviderProps = {
  children: JSX.Element
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState('');

  const siginWithToken = async (token: string) => {
    const { accessToken, refreshToken } = await api.siginWithToken(token)
  }

  const githubAuth = async (code: string) => {
    try {
      const { user } = await api.githubAuth(code)
      setUser(user)
      console.log('user in Provider ===', user)
      return true
    } catch (error) {
      if (error instanceof Error)
        setError(error.message)
    }
    return false
  }

  const signin = async ({ username, email, password }: SignInProps) => {
    const { user, accessToken, refreshToken } = await api.signin({ username, email, password })
    if (user && accessToken && refreshToken) {
      setUser(user)
      return true
    }
    return false
  }

  const signout = async () => {
    await api.signout()
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, error, signin, githubAuth, signout }}>
      {children}
    </AuthContext.Provider>
  )
}