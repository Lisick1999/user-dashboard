const statsLoader = async () => {
	try {
		const response = await fetch('https://rickandmortyapi.com/api/character?page=1');
		if (!response.ok) throw new Error('Failed to preload data');

		const data = await response.json();
		return {
			message: 'Stats page loaded',
			preloadedData: data,
		};
	} catch (error) {
		return {
			message: 'Stats page loaded (preload failed)',
			preloadedData: null,
		};
	}
};

export default statsLoader;
