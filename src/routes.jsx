import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })))
const Login = lazy(() => import('./pages/Login').then(module => ({ default: module.Login })))
const Dashboard = lazy(() => import('./pages/Dashboard').then(module => ({ default: module.Dashboard })))
const Profile = lazy(() => import('./components/Profile').then(module => ({ default: module.Profile })))
const Settings = lazy(() => import('./components/Settings').then(module => ({ default: module.Settings })))
const Stats = lazy(() => import('./pages/Stats').then(module => ({ default: module.Stats })))
const ProtectedRoute = lazy(() => import('./components/ProtectedRoute').then(module => ({ default: module.ProtectedRoute })))

export const ROUTE_PATHS = {
  HOME: "/",
  LOGIN: "/login",
  DASHBOARD: "/dashboard",
  PROFILE: "/dashboard/profile",
  SETTINGS: "/dashboard/settings",
  STATS: "/dashboard/stats",
};

export const NAV_ITEMS = [
  { path: ROUTE_PATHS.PROFILE, label: "Profile" },
  { path: ROUTE_PATHS.SETTINGS, label: "Settings" },
  { path: ROUTE_PATHS.STATS, label: "Statistics" },
];

export const routesConfig = [
  {
    path: ROUTE_PATHS.HOME,
    element: <Home />,
    index: true,
  },
  {
    path: ROUTE_PATHS.LOGIN,
    element: <Login />,
  },
  {
    path: ROUTE_PATHS.DASHBOARD,
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Navigate to={ROUTE_PATHS.PROFILE} replace />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "stats",
        element: <Stats />,
        loader: () => import('./pages/Stats').then(module => module.statsLoader()),
      },
    ],
  },
];
