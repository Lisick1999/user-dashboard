import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { NAV_ITEMS, ROUTE_PATHS } from '@/pages/routes.jsx';

const DashboardPage = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const handleLogout = () => {
		localStorage.removeItem('isAuthenticated');
		localStorage.removeItem('userEmail');
		navigate(ROUTE_PATHS.LOGIN);
	};

	return (
		<div className="dashboard-container">
			<div className="container">
				<div className="dashboard-header">
					<h1 className="dashboard-title">Панель пользователя</h1>
					<button className="logout-button" onClick={handleLogout}>
						Выход
					</button>
				</div>

				<nav className="dashboard-nav">
					{NAV_ITEMS.map((item) => (
						<button
							key={item.path}
							onClick={() => navigate(item.path)}
							className={`nav-button ${location.pathname === item.path ? 'active' : ''}`}
						>
							{item.label}
						</button>
					))}
				</nav>

				<div className="dashboard-content">
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default DashboardPage;
