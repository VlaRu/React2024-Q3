import { URL } from '../utils/variables';

export async function FetchResponse({ query = '', page = 1, size = 6 }) {
  const queryParameters = `?page=${page}&pageSize=${size}&q=name:`;
  const queryString = query
    ? `${queryParameters}${query}*`
    : `${queryParameters}*`;

  try {
    const response = await fetch(`${URL}${queryString}`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export async function FetchDetailCard({ idCard }) {
  try {
    const response = await fetch(`${URL}${idCard.id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
