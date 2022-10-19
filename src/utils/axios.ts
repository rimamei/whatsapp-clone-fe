import axios from 'axios';
import { getCookie } from './cookies';

export const Api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API}/`,
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axios.interceptors.request.use(
  async (config) => {
    const token = getCookie('acs_tkn');
    if (token) {
      if (config && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
