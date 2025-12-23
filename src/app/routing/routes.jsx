import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { ROUTE_PATHS } from '@/shared/config';

const HomePage = lazy(() => import('@/pages/home'));
const LoginPage = lazy(() => import('@/pages/login'));
const DashboardPage = lazy(() => import('@/pages/dashboard'));
const ProfilePage = lazy(() => import('@/pages/profile'));
const SettingsPage = lazy(() => import('@/pages/settings'));
const StatsPage = lazy(() => import('@/pages/stats/ui'));
const ProtectedRoute = lazy(() =>
    import('@/features/auth').then((module) => ({ default: module.ProtectedRoute }))
);

export const routesConfig = [
    {
        path: ROUTE_PATHS.HOME,
        element: <HomePage />,
        index: true,
    },
    {
        path: ROUTE_PATHS.LOGIN,
        element: <LoginPage />,
    },
    {
        path: ROUTE_PATHS.DASHBOARD,
        element: (
            <ProtectedRoute>
                <DashboardPage />
            </ProtectedRoute>
        ),
        children: [
            {
                index: true,
                element: <Navigate to={ROUTE_PATHS.PROFILE} replace />,
            },
            {
                path: 'profile',
                element: <ProfilePage />,
            },
            {
                path: 'settings',
                element: <SettingsPage />,
            },
            {
                path: 'stats',
                element: <StatsPage />,
                loader: () => import('@/shared/lib/stats-loader'),
            },
        ],
    },
];

