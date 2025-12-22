import './ProfilePage.css';

const ProfilePage = () => {
	const userEmail = localStorage.getItem('userEmail') || 'User';
	const joinDate = new Date().toLocaleDateString('ru-RU', {
		month: 'long',
		year: 'numeric',
	});

	return (
		<div className="profile-container">
			<div className="profile-header">
				<h2 className="profile-title">Информация профиля</h2>
				<div className="profile-avatar">{userEmail.charAt(0).toUpperCase()}</div>
			</div>

			<div className="profile-info">
				<div className="info-card">
					<div className="info-icon">📧</div>
					<div className="info-content">
						<div className="info-label">Email</div>
						<div className="info-value">{userEmail}</div>
					</div>
				</div>

				<div className="info-card">
					<div className="info-icon">✅</div>
					<div className="info-content">
						<div className="info-label">Статус</div>
						<div className="info-value status-active">Активный</div>
					</div>
				</div>

				<div className="info-card">
					<div className="info-icon">📅</div>
					<div className="info-content">
						<div className="info-label">Участник с</div>
						<div className="info-value">{joinDate}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
