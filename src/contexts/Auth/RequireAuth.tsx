import { useContext } from 'react'
import { Navigate } from 'react-router-dom'

import { AuthContext } from './AuthContext'

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useContext(AuthContext)

  if (!auth.user && !localStorage.getItem('IKATOO_AuthToken')) {
    return <Navigate to="/login" />
  }

  return children
}
