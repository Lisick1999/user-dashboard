import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
	const navigate = useNavigate();

	return (
		<div className="home-container">
			<div className="card home-card">
				<h1 className="home-title">Добро пожаловать в панель пользователя</h1>
				<p className="home-subtitle">
					Управляйте своим профилем, настройками и просматривайте статистику в
					одном месте.
				</p>
				<button className="home-button" onClick={() => navigate('/login')}>
					Начать
				</button>
			</div>
		</div>
	);
};

export default HomePage;
