import { useState, useEffect, useCallback } from 'react';

export const useInfinityScroll = ({ fetchFn, category }) => {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(false);
	const [page, setPage] = useState(1);
	const [hasMore, setHasMore] = useState(true);
	const [error, setError] = useState(null);

	const fetchItems = useCallback(
		async (pageNum) => {
			if (pageNum === 0) return;

			try {
				setLoading(true);
				setError(null);

				const data = await fetchFn(pageNum);

				if (data.results && data.results.length > 0) {
					setItems((prev) => {
						const newItems = data.results.filter(
							(newItem) =>
								!prev.some(
									(existingItem) => existingItem.id === newItem.id,
								),
						);
						return [...prev, ...newItems];
					});
				}

				setHasMore(data.info.next !== null);
			} catch (err) {
				setError(err.message);
				if (err.message.includes('404')) {
					setHasMore(false);
				}
			} finally {
				setLoading(false);
			}
		},
		[fetchFn],
	);

	useEffect(() => {
		setItems([]);
		setPage(1);
		setHasMore(true);
		setError(null);
	}, [category]);

	useEffect(() => {
		fetchItems(1);
	}, [category, fetchItems]);

	const handleScroll = useCallback(() => {
		if (loading || !hasMore) return;

		if (
			window.innerHeight + document.documentElement.scrollTop >=
			document.documentElement.offsetHeight - 100
		) {
			setPage((prev) => prev + 1);
		}
	}, [loading, hasMore]);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [handleScroll]);

	useEffect(() => {
		if (page > 1) {
			fetchItems(page);
		}
	}, [page, fetchItems]);

	return { items, loading, hasMore, error };
};

