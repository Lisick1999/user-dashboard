import { useLoaderData } from 'react-router-dom';

const Stats = () => {
  const user = useLoaderData();

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
  );
};

export default Stats;
// УБРАТЬ экспорт statsLoader отсюда!
