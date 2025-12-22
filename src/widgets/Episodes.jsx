import '../app/styles/index.css'
import {InfinityScrollList} from "@/features/InfinityScrollList/InfinityScrollList.jsx";

const Episodes = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Эпизоды</h1>
      <InfinityScrollList
        url="https://rickandmortyapi.com/api/episode"
        renderItem={(episode) => (
          <div className="p-4 border rounded-lg bg-white shadow-sm">
            <h3 className="font-semibold">{episode.name}</h3>
            <p>Эпизод: {episode.episode}</p>
            <p>Дата выхода: {episode.air_date}</p>
          </div>
        )}
      />
    </div>
  );
};

export default Episodes;
