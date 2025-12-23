import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { NAV_ITEMS, ROUTE_PATHS } from '@/shared/config';
import styles from './DashboardPage.module.css';

const DashboardPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('userEmail');
        navigate(ROUTE_PATHS.LOGIN);
    };

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Панель пользователя</h1>
                    <button className={styles.logoutButton} onClick={handleLogout}>
                        Выход
                    </button>
                </div>

                <nav className={styles.nav}>
                    {NAV_ITEMS.map((item) => (
                        <button
                            key={item.path}
                            onClick={() => navigate(item.path)}
                            className={`${styles.navButton} ${location.pathname === item.path ? styles.active : ''}`}
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>

                <div className={styles.content}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;

