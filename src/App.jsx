import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routesConfig } from './routes'
import ErrorBoundary from './components/ErrorBoundary'
import { Suspense } from 'react'

const router = createBrowserRouter(routesConfig)

export const App = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </ErrorBoundary>
  )
}
