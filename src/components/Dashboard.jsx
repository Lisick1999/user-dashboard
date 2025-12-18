import { Outlet, useNavigate, useLocation } from 'react-router-dom'

export const Dashboard = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated')
    localStorage.removeItem('userEmail')
    navigate('/login')
  }

  const navItems = [
    { path: 'profile', label: 'Profile' },
    { path: 'settings', label: 'Settings' },
    { path: 'stats', label: 'Statistics' }
  ]

  return (
    <div className="dashboard-container">
      <div className="container">
        <div className="dashboard-header">
          <h1 className="dashboard-title">Панель пользователя</h1>
          <button className="logout-button" onClick={handleLogout}>
            Вход
          </button>
        </div>
        
        <nav className="dashboard-nav">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`nav-button ${location.pathname.includes(item.path) ? 'active' : ''}`}
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
  )
}
