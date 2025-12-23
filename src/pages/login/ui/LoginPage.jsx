import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './LoginPage.module.css';

const LoginPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();
	const location = useLocation();

	const from = location.state?.from?.pathname || '/dashboard';

	const handleSubmit = (e) => {
		e.preventDefault();
		if (email && password) {
			localStorage.setItem('isAuthenticated', 'true');
			localStorage.setItem('userEmail', email);
			navigate(from, { replace: true });
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h2 className={styles.title}>Вход в панель</h2>
				<form onSubmit={handleSubmit} className={styles.form}>
					<div className={styles.formGroup}>
						<label className={styles.label}>Email</label>
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Enter your email"
							className={styles.input}
							required
						/>
					</div>
					<div className={styles.formGroup}>
						<label className={styles.label}>Password</label>
						<input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Enter your password"
							className={styles.input}
							required
						/>
					</div>
					<button type="submit" className={styles.button}>
						Войти
					</button>
				</form>
				<p className={styles.demoInfo}>
					Demo: Подойдет любой адрес электронной почты и пароль.
				</p>
			</div>
		</div>
	);
};

export default LoginPage;

