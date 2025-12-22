import { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import React, { Suspense } from 'react';

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

const Home = lazy(() => import('@/pages/HomePage/HomePage.jsx'))
const Login = lazy(() => import('@/pages/LoginPage/LoginPage.jsx'))
const Dashboard = lazy(() => import('@/pages/DashboardPage/DashboardPage.jsx'))
const Profile = lazy(() => import('@/pages/ProfilePage/ProfilePage.jsx'))
const Settings = lazy(() => import('@/pages/SettingsPage/SettingsPage.jsx'))
const Stats = lazy(() => import('@/pages/Stats/Stats.jsx'));

const ProtectedRoute = lazy(() => import('@/shared/ProtectedRoute/ProtectedRoute.jsx'))

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
        element: <Stats />
      },
    ],
  },
];
