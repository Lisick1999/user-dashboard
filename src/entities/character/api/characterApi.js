import { API_ENDPOINTS } from '@/shared/api';

export const fetchCharacters = async (page = 1) => {
	const response = await fetch(`${API_ENDPOINTS.CHARACTER}?page=${page}`);
	if (!response.ok) throw new Error('Failed to fetch characters');
	return response.json();
};

