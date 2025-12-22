import '@/app/styles/index.css'
import {InfinityScrollList} from "@/features/InfinityScrollList/InfinityScrollList.jsx";

const Characters = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Персонажи</h1>
      <InfinityScrollList
        url="https://rickandmortyapi.com/api/character"
        renderItem={(character) => (
          <div className="p-4 border rounded-lg bg-white shadow-sm">
            <h3 className="font-semibold">{character.name}</h3>
            <p>Статус: {character.status}</p>
            <p>Вид: {character.species}</p>
          </div>
        )}
      />
    </div>
  );
};

export default Characters;
