import { Navigate } from 'react-router-dom'

import useAuth from '../../hooks/useAuth'

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth()

  if (!auth.user && !localStorage.getItem('IKATOO_AuthToken')) {
    return <Navigate to="/login" />
  }

  return children
}
