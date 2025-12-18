import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || '/dashboard'

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email && password) {
      localStorage.setItem('isAuthenticated', 'true')
      localStorage.setItem('userEmail', email)
      navigate(from, { replace: true })
    }
  }

  return (
    <div className="login-container">
      <div className="card login-card">
        <h2 className="login-title">Вход в панель</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="form-input"
              required
            />
          </div>
          <button type="submit" className="login-button">
            Войти
          </button>
        </form>
        <p style={{ marginTop: '20px', textAlign: 'center', color: '#718096' }}>
          Demo: Подойдет любой адрес электронной почты и пароль.
        </p>
      </div>
    </div>
  )
}
