import axios from 'axios';

const ACCESS_KEY = 'KnyfDsgt7MtDx5liLYeJyGAYWGqPHS0xiWtNG4cXTVQ';
axios.defaults.baseURL = 'https://api.unsplash.com/';

export const fetchImages = async (query, page = 1) => {
  const response = await axios.get('/search/photos', {
    params: {
      query,
      page,
      per_page: 12,
      client_id: ACCESS_KEY,
    },
  });
  return response.data;
};