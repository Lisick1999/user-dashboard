import { useLoaderData } from 'react-router-dom'

export async function statsLoader() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
  if (!response.ok) {
    throw new Response("Failed to load stats", { status: 500 })
  }
  return response.json()
}

export const Stats = () => {
  const user = useLoaderData()

  return (
    <div>
      <h2 className="stats-title">Статистика пользователя</h2>
      <div className="stats-info">
        <div className="stats-item">
          <strong>Имя:</strong> {user.name}
        </div>
        <div className="stats-item">
          <strong>Email:</strong> {user.email}
        </div>
        <div className="stats-item">
          <strong>Имя пользователя:</strong> {user.username}
        </div>
        <div className="stats-item">
          <strong>Телефон:</strong> {user.phone}
        </div>
        <div className="stats-item">
          <strong>Веб-сайт:</strong> {user.website}
        </div>
        <div className="stats-item">
          <strong>Компания:</strong> {user.company?.name}
        </div>
      </div>
    </div>
  )
}
