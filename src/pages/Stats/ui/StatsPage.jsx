import { useState, useMemo } from 'react';
import { useLoaderData } from 'react-router-dom';
import styles from './StatsPage.module.css';
import {InfinityScrollList} from "@/features/index.js";

const CATEGORIES = [
	{ value: 'character', label: 'Характеристики' },
	{ value: 'location', label: 'Локации' },
	{ value: 'episode', label: 'Эпизоды' },
];

const StatsPage = () => {
	const [selectedCategory, setSelectedCategory] = useState('character');
	const loaderData = useLoaderData();

	const categoryButtons = useMemo(
		() =>
			CATEGORIES.map((category) => (
				<button
					key={category.value}
					onClick={() => setSelectedCategory(category.value)}
					className={`${styles.categoryBtn} ${selectedCategory === category.value ? styles.active : ''}`}
					aria-pressed={selectedCategory === category.value}
				>
					{category.label}
				</button>
			)),
		[selectedCategory],
	);

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<h1>Статистика Рика и Морти</h1>
				<p>Исследуйте обширную вселенную Рика и Морти.</p>
			</div>

			<div
				className={styles.categorySelector}
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

export default StatsPage;
