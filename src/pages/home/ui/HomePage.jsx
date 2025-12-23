import { useNavigate } from 'react-router-dom';
import styles from './HomePage.module.css';

const HomePage = () => {
	const navigate = useNavigate();

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1 className={styles.title}>Добро пожаловать в панель пользователя</h1>
				<p className={styles.subtitle}>
					Управляйте своим профилем, настройками и просматривайте статистику в
					одном месте.
				</p>
				<button className={styles.button} onClick={() => navigate('/login')}>
					Начать
				</button>
			</div>
		</div>
	);
};

export default HomePage;

