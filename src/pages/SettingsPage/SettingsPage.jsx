const SettingsPage = () => {
	return (
		<div>
			<h2 className="settings-title">Настройки аккаунта</h2>
			<div className="settings-content">
				<div className="stats-item">
					<strong>Уведомления:</strong> Включено
				</div>
				<div className="stats-item">
					<strong>Тема:</strong> Свет
				</div>
				<div className="stats-item">
					<strong>Язык:</strong> Английский
				</div>
				<div className="stats-item">
					<strong>Конфиденциальность:</strong> Стандартный
				</div>
			</div>
		</div>
	);
};

export default SettingsPage;
