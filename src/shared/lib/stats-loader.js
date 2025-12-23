import {API_ENDPOINTS} from "@/shared/index.js";

export const statsLoader = async () => {
	try {
		const response = await fetch(`${API_ENDPOINTS.CHARACTER}?page=1`);
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

