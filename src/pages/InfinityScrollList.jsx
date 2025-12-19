import { useState, useEffect, useCallback } from 'react';
import '../index.css'

const InfinityScrollList = ({ url, renderItem }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [nextPage, setNextPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${url}?page=${nextPage}`);
      if (!response.ok) throw new Error('Ошибка загрузки данных');
      
      const result = await response.json();
      setData(prev => [...prev, ...result.results]);
      setNextPage(prev => prev + 1);
      setHasMore(!!result.info.next);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [url, nextPage, loading, hasMore]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop 
          >= document.documentElement.offsetHeight - 100) {
        loadMore();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadMore]);

  useEffect(() => {
    loadMore();
  }, []);

  if (error) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
        <p className="text-red-600">Ошибка: {error}</p>
        <button
          onClick={loadMore}
          className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Попробовать снова
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {data.map((item, index) => (
        <div key={item.id || index}>
          {renderItem(item)}
        </div>
      ))}
      
      {loading && (
        <div className="flex justify-center py-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      )}
      
      {!hasMore && (
        <div className="text-center py-4 text-gray-500">
          Все данные загружены
        </div>
      )}
    </div>
  );
};

export default InfinityScrollList;
