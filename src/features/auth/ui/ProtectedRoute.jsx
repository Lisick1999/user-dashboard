import { Navigate } from 'react-router-dom';
import { ROUTE_PATHS } from '@/shared/config';

export const ProtectedRoute = ({ children }) => {
    const isAuthenticated = true;

    return isAuthenticated ? children : <Navigate to={ROUTE_PATHS.LOGIN} replace />;
};

