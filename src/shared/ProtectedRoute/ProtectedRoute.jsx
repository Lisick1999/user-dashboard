import { Navigate } from 'react-router-dom';
import { ROUTE_PATHS } from '@/pages/routes.jsx';

const ProtectedRoute = ({ children }) => {
	const isAuthenticated = true;

	return isAuthenticated ? children : <Navigate to={ROUTE_PATHS.LOGIN} replace />;
};

export default ProtectedRoute;
