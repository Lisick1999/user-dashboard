import { useState, useMemo } from 'react';
import { useLoaderData } from 'react-router-dom';
import { InfinityScrollList } from '@/features/InfinityScrollList/InfinityScrollList.jsx';

const CATEGORIES = [
	{ value: 'character', label: 'Characters' },
	{ value: 'location', label: 'Locations' },
	{ value: 'episode', label: 'Episodes' },
];

const Stats = () => {
	const [selectedCategory, setSelectedCategory] = useState('character');
	const loaderData = useLoaderData();

	const categoryButtons = useMemo(
		() =>
			CATEGORIES.map((category) => (
				<button
					key={category.value}
					onClick={() => setSelectedCategory(category.value)}
					className={`category-btn ${selectedCategory === category.value ? 'active' : ''}`}
					aria-pressed={selectedCategory === category.value}
				>
					{category.label}
				</button>
			)),
		[selectedCategory],
	);

	return (
		<div className="stats-container">
			<div className="stats-header">
				<h1>Статистика Рика и Морти</h1>
				<p>Исследуйте обширную вселенную Рика и Морти.</p>
			</div>

			<div
				className="category-selector"
				role="tablist"
				aria-label="Select category"
			>
				{categoryButtons}
			</div>

			<InfinityScrollList
				category={selectedCategory}
				key={selectedCategory}
				preloadedData={
					selectedCategory === 'character'
						? loaderData?.preloadedData || null
						: null
				}
			/>
		</div>
	);
};

export default Stats;
