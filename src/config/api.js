import {create} from 'apisauce';

const api = create({
  baseURL: 'https://example.com/api/v3',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});

export default api;
