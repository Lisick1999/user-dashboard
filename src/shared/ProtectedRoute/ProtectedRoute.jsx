// import { Navigate } from 'react-router-dom'

// export const ProtectedRoute = ({ children }) => {
//   const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'
//   return isAuthenticated ? children : <Navigate to="/login" replace />
// }

import { Navigate } from 'react-router-dom'
import { ROUTE_PATHS } from '@/pages/routes.jsx'

const ProtectedRoute = ({ children }) => {
  // Здесь должна быть ваша логика проверки аутентификации
  const isAuthenticated = true // Замените на реальную проверку

  return isAuthenticated ? children : <Navigate to={ROUTE_PATHS.LOGIN} replace />
}

export default ProtectedRoute
