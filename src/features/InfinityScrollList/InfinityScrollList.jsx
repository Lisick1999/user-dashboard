import { useState, useEffect, useCallback } from 'react';
import '@/app/styles/index.css';

export const InfinityScrollList = ({ category }) => {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(false);
	const [page, setPage] = useState(1);
	const [hasMore, setHasMore] = useState(true);
	const [error, setError] = useState(null);

	const API_URLS = {
		character: 'https://rickandmortyapi.com/api/character',
		location: 'https://rickandmortyapi.com/api/location',
		episode: 'https://rickandmortyapi.com/api/episode',
	};

	const fetchItems = useCallback(
		async (pageNum) => {
			if (pageNum === 0) return;

			try {
				setLoading(true);
				setError(null);

				const response = await fetch(`${API_URLS[category]}?page=${pageNum}`);
				if (!response.ok) throw new Error('Network response was not ok');

				const data = await response.json();

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
		[category],
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

	const renderItem = (item) => {
		switch (category) {
			case 'character':
				return (
					<div key={item.id} className="scroll-item">
						<img src={item.image} alt={item.name} className="item-image" />
						<div className="item-info">
							<h3>{item.name}</h3>
							<p>
								{item.species} - {item.status}
							</p>
						</div>
					</div>
				);
			case 'location':
				return (
					<div key={item.id} className="scroll-item">
						<div className="item-info">
							<h3>{item.name}</h3>
							<p>
								{item.type} - {item.dimension}
							</p>
						</div>
					</div>
				);
			case 'episode':
				return (
					<div key={item.id} className="scroll-item">
						<div className="item-info">
							<h3>{item.name}</h3>
							<p>
								{item.episode} - {item.air_date}
							</p>
						</div>
					</div>
				);
			default:
				return null;
		}
	};

	return (
		<div className="infinity-scroll-container">
			<h2>{category.charAt(0).toUpperCase() + category.slice(1)} List</h2>

			<div className="items-list">{items.map(renderItem)}</div>

			{loading && (
				<div className="loading">Загрузка дополнительных элементов...</div>
			)}
			{error && <div className="error">Error: {error}</div>}
			{!hasMore && items.length > 0 && (
				<div className="no-more">Больше нет элементов для загрузки.</div>
			)}
			{!hasMore && items.length === 0 && (
				<div className="no-items">Элементы не найдены</div>
			)}
		</div>
	);
};
