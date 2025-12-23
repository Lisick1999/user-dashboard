import { API_ENDPOINTS } from '@/shared/api';

export const fetchLocations = async (page = 1) => {
	const response = await fetch(`${API_ENDPOINTS.LOCATION}?page=${page}`);
	if (!response.ok) throw new Error('Failed to fetch locations');
	return response.json();
};

