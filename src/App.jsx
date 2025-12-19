import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routesConfig } from './routes'

const router = createBrowserRouter(routesConfig)

export const App = () => {
  return <RouterProvider router={router} />
}
