import styles from './ProfilePage.module.css';

const ProfilePage = () => {
	const userEmail = localStorage.getItem('userEmail') || 'User';
	const joinDate = new Date().toLocaleDateString('ru-RU', {
		month: 'long',
		year: 'numeric',
	});

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<h2 className={styles.title}>Информация профиля</h2>
				<div className={styles.avatar}>{userEmail.charAt(0).toUpperCase()}</div>
			</div>

			<div className={styles.info}>
				<div className={styles.card}>
					<div className={styles.icon}>📧</div>
					<div className={styles.content}>
						<div className={styles.label}>Email</div>
						<div className={styles.value}>{userEmail}</div>
					</div>
				</div>

				<div className={styles.card}>
					<div className={styles.icon}>✅</div>
					<div className={styles.content}>
						<div className={styles.label}>Статус</div>
						<div className={`${styles.value} ${styles.statusActive}`}>Активный</div>
					</div>
				</div>

				<div className={styles.card}>
					<div className={styles.icon}>📅</div>
					<div className={styles.content}>
						<div className={styles.label}>Участник с</div>
						<div className={styles.value}>{joinDate}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;

