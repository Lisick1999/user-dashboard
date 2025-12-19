import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Dashboard } from "./components/Dashboard";
import { Profile } from "./components/Profile";
import { Settings } from "./components/Settings";
import { statsLoader, Stats } from "./components/Stats";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Navigate } from "react-router-dom";

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
        loader: statsLoader,
      },
    ],
  },
];
