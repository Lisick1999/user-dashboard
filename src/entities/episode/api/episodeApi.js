import { API_ENDPOINTS } from '@/shared/api';

export const fetchEpisodes = async (page = 1) => {
	const response = await fetch(`${API_ENDPOINTS.EPISODE}?page=${page}`);
	if (!response.ok) throw new Error('Failed to fetch episodes');
	return response.json();
};

