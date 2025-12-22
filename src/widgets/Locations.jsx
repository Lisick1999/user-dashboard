import '@/app/styles/index.css'
import {InfinityScrollList} from "@/features/InfinityScrollList/InfinityScrollList.jsx";

const Locations = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Локации</h1>
      <InfinityScrollList
        url="https://rickandmortyapi.com/api/location"
        renderItem={(location) => (
          <div className="p-4 border rounded-lg bg-white shadow-sm">
            <h3 className="font-semibold">{location.name}</h3>
            <p>Тип: {location.type}</p>
            <p>Измерение: {location.dimension}</p>
          </div>
        )}
      />
    </div>
  );
};

export default Locations;
