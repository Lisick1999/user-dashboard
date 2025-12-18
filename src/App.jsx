import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Navigate } from 'react-router-dom'
import { Home } from './components/Home'
import { Login } from './components/Login'
import { Dashboard } from './components/Dashboard'
import { Profile } from './components/Profile'
import { Settings } from './components/Settings'
import { statsLoader, Stats } from './components/Stats'
import { ProtectedRoute } from './components/ProtectedRoute'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route
        path="dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="profile" replace />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
        <Route 
          path="stats" 
          element={<Stats />} 
          loader={statsLoader}
        />
      </Route>
    </Route>
  )
)

export const App = () => {
  return <RouterProvider router={router} />
}
