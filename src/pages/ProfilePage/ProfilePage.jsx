export const ProfilePage = () => {
  const userEmail = localStorage.getItem('userEmail') || 'User'

  return (
    <div>
      <h2 className="profile-title">Информация профиля</h2>
      <div className="profile-info">
        <div className="stats-item">
          <strong>Email:</strong> {userEmail}
        </div>
        <div className="stats-item">
          <strong>Статус:</strong> Активный
        </div>
        <div className="stats-item">
          <strong>Участник с:</strong> Января 2024
        </div>
      </div>
    </div>
  )
}

export default ProfilePage